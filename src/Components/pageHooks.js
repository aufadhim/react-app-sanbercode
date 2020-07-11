import React, { useState, useEffect } from 'react';
import logo from '../logo.svg'
export default function Hooks() {
  const [count, setCount] = useState(0);

//   didupdate didmount
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count])

//   unmount 
  useEffect(() => {
    console.log('Unmounting');
  },[]);

  return (
    <div className="App App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>You Clicked {count} Times</p>
      <button className="button-style" onClick={() => setCount(count + 1)}>Add</button>
      <button className="button-style"onClick={() => setCount(0)}>Clear</button>
    </div>
  );
}