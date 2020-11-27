import React from 'react';
import { useInput, useTabs, useTitle } from "./hooks";
import './App.css';



function App() {  
  // useInput
  const maxLen = value => value.length <= 10;
  // const maxLen = value => !value.includes("@");
  const name = useInput("Mr. ", maxLen);

  // tabs data
  const content = [
    {
      tab: "section 1",
      content: "I'm the contentn of the Section 1"
    },
    {
      tab: "section 2",
      content: "I'm the contentn of the Section 2"
    }
  ]
 
  // set tabs' default
  const {currentItem, changeItem} = useTabs(0, content);

  // useTitle
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);


  return (
    <>
    {/* useInput */}
    <div className="App">
      <span>Hello</span>
      
      {/* <input placeholder="name" value={name.value}/> */}
      <input placeholder="name" {...name}/>      
    </div>

    {/* useTabs */}
    <div className="App">      
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
    </div>
    {currentItem.content}
    </>
  );
}

export default App;

// hooks : react의 state machine에 연결하는 기본적인 방법

// useInput input updating