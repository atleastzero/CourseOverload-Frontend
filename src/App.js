import React from 'react'
// import ReactDOM from 'react-dom'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import Backpack from './containers/Backpack/Backpack'
import Terms from './containers/Terms/Terms'

import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <DndProvider backend={Backend}>
        <Terms />
        <Backpack />
			</DndProvider>
    </div>
  );
}

export default App;
