import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";

const Count = () => {
  const selectNumber = useRef(null);
  // Redux：使用 useSelector 来获取 Redux 状态，使用 useDispatch 来派发 actions
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

// useSelector 内的回调函数会在以下情况下被调用：
// 组件首次渲染时: 当组件首次渲染时，useSelector 内的回调函数会被调用，以获取当前 Redux 存储中的状态。
// Redux 存储中的状态发生变化时: 当 Redux 存储中的任何状态发生变化时，useSelector 内的回调函数会被调用，以检查所选择的状态是否发生了变化。如果所选择的状态发生了变化，组件会重新渲染。
// 组件重新渲染时: 如果组件由于其他原因重新渲染（例如，父组件重新渲染），useSelector 内的回调函数也会被调用，以确保获取最新的状态。