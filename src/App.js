import logo from './logo.svg';
import './App.css';
import MyCounter from './components/MyCounter';
import IncreaseDecreaseCount from './components/IncreaseDecreaseCount';
import UseEffectTitle from './components/UseEffectTitle';
import Counter from './Counter';
import CounterDisplay from './CounterDisplay';
import { useState } from 'react';
import ParentCounter from './ParentCounter';
import MyProvider from './MyProvider';



function App() {
  return (
    <>
    <MyProvider>
    <Counter/>
    <ParentCounter/>
    </MyProvider>
    {/* <MyCounter/>
    <IncreaseDecreaseCount/>
      <UseEffectTitle/> */}
    </>
  );
}

export default App;
