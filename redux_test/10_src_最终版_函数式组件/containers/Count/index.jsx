import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";

const Count = () => {
  const selectNumber = useRef(null);
  const count = useSelector((state) => state.count);
  const personCount = useSelector((state) => state.persons.length);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const value = selectNumber.current.value;
    dispatch(increment(value * 1));
  };

  const handleDecrement = () => {
    const value = selectNumber.current.value;
    dispatch(decrement(value * 1));
  };

  const handleIncrementIfOdd = () => {
    const value = selectNumber.current.value;
    if (count % 2 !== 0) {
      dispatch(increment(value * 1));
    }
  };

  const handleIncrementAsync = () => {
    const value = selectNumber.current.value;
    dispatch(incrementAsync(value * 1, 500));
  };

  return (
    <div>
      <h2>我是Count组件, 下方组件总人数为: {personCount}</h2>
      <h4>当前求和为：{count}</h4>
      <select ref={selectNumber}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;
      <button onClick={handleIncrement}>+</button>&nbsp;
      <button onClick={handleDecrement}>-</button>&nbsp;
      <button onClick={handleIncrementIfOdd}>当前求和为奇数再加</button>&nbsp;
      <button onClick={handleIncrementAsync}>异步加</button>&nbsp;
    </div>
  );
};

export default Count;
