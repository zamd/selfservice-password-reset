import React, {Component} from 'react'
import {connect} from 'react-redux'

import {authActions} from '../actions'
import auth0 from 'auth0-js'
import Login from '../components/Login'
import Logout from '../components/Logout'

class Auth0Auth extends Component {
  constructor(props) {
    super(props)
    this.auth0 = new auth0.WebAuth({
      domain: "selfservice-cse.auth0.com",
      clientID: "feWtQ656G2K43FGeyCsET8O1vhSc75XT",
      redirectUri: "http://localhost:3000/callback",
      audience: "https://selfservice-cse.auth0.com/userinfo",
      responseType: "token id_token",
      scope: "openid"
    });
  }
  componentDidMount() {
    const {loginFailed, loginSuccess} = this.props;
    this
      .auth0
      .parseHash((err, authResult) => {
        if (err) {
          return loginFailed(err);
        }
        if (authResult) {
          loginSuccess(authResult);
        }
      });
  }

  render() {
    const {login, logout, inProgress, isAuthenticated} = this.props;
    return (isAuthenticated
      ? <Logout onLogout={()=>logout()}/>
      : <Login onLogin={() => login(this.auth0)}/>)
  }
}

const mapStateToProps = state => {
  const {inProgress, accessToken} = state
    .auth
    .toJS();
  return {inProgress, isAuthenticated: accessToken}
}

export default connect(mapStateToProps, authActions)(Auth0Auth)