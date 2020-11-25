import React from 'react';
import { useInput } from "./hooks";
import './App.css';



function App() {  
  // useInput
  const maxLen = value => value.length <= 10;
  // const maxLen = value => !value.includes("@");
  const name = useInput("Mr. ", maxLen);
 
  return (
    <>
    {/* useInput */}
    <div className="App">
      <span>Hello</span>
      
      {/* <input placeholder="name" value={name.value}/> */}
      <input placeholder="name" {...name}/>      
    </div>
    </>
  );
}

export default App;

// hooks : react의 state machine에 연결하는 기본적인 방법

// useInput input updating