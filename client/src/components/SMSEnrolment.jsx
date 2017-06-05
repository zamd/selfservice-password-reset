import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@auth0/styleguide-react-components';

const SMSEnrolment = ({ enroll, enrolment }) => {
  return (
    <div className="row" style={{ "margin-top": 25 }} >
      <div className="col-xs-12">
        <Button disabled={enrolment.get('inProgress')} onClick={enroll}>Enroll SMS</Button>
      </div>
    </div>
  );
}

SMSEnrolment.propTypes = {
  enroll: PropTypes.func.isRequired,
  enrolment: PropTypes.object.isRequired
};

export default SMSEnrolment;