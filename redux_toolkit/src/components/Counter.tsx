import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../redux/CounterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [val, setVal] = useState<number>(0);
  const handleAdd = () => {
    dispatch(incrementByAmount(val));
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(Number(e.target.value));
  };
  return (
    <div>
      <input type='number' value={val} onChange={handleInput} />

      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Incre</button>
      <button onClick={() => dispatch(decrement())}>decre</button>
      <button onClick={handleAdd}>IncreByValue</button>
    </div>
  );
}

export default Counter;
