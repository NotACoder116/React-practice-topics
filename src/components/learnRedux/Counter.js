import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increamentAction, decreamentAction, resetAction } from '../../redux/actions';

export const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state);
  const inputRef = useRef();
  const actions = bindActionCreators({ increamentAction, decreamentAction, resetAction }, dispatch);

  const handleIncreament = () => {
    // dispatch(increamentAction(1));
    actions.increamentAction(1);
  };

  const handleDecreament = () => {
    // dispatch(decreamentAction(1));
    actions.decreamentAction(1);
  };

  const handleReset = () => {
    // dispatch(resetAction());
    actions.resetAction();
  }

  const handleClick = () => {
    // dispatch(resetAction(inputRef.current.value));
    actions.resetAction(inputRef.current.value);
    inputRef.current.value = 0;
  }
  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{value}</p>
      <section className="controls">
        <button onClick={handleIncreament}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecreament}>Decrement</button>
      </section>
      <footer>
        <input ref={inputRef} />
        <button onClick={handleClick}>Set Counter</button>
      </footer>
    </main>
  );
};

export default Counter;
