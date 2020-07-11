import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, decrementAsync } from '../Actions';
import '../App.css';
import logo from '../logo.svg'

function Reduxs() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const _add = () => {
    dispatch(incrementAsync());
  }

  const _substract = () => {
    dispatch(decrementAsync());
  }

  return (
    <div className="App App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>Counter: {counter}</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button className="button-style" style={{ width: 100 }} onClick={_substract}>-</button>
        <button className="button-style" style={{ width: 100 }} onClick={_add}>+</button>
      </div>
    </div>
  );
}

export default Reduxs;