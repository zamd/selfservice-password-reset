import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@auth0/styleguide-react-components';

const Counter = ({ increment, incrementAsync, decrement, decrementAsync, counter }) => {
  return (
    <div>
      <p>Count: {counter.get('count')}</p>

      <p>

        <Button onClick={increment} disabled={counter.get('isIncrementing')}>Increment</Button>
        <Button bsStyle="info" onClick={incrementAsync} disabled={counter.get('isIncrementing')}>Increment Async</Button>
      </p>

      <p>
        <Button onClick={decrement} disabled={counter.get('isDecrementing')}>Decrementing</Button>
        <Button bsStyle="info" onClick={decrementAsync} disabled={counter.get('isDecrementing')}>Decrement Async</Button>
      </p>
    </div>
  )
};

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  counter: PropTypes.object.isRequired
};

export default Counter;