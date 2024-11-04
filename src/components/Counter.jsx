
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';


const Counter = () => {
// we use this function for taking the state value.
  const count = useSelector(state => state.count)

  // we use this function for dispatch.
  const dispatch = useDispatch();


  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  }


  return (
    <>
      <h2>Counter App</h2>

      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Counter;
