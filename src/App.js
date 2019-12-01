import React from 'react';
import './App.css';
import Shop from './Components/Shop';
import {itemList} from './Components/itemClass';

function App() {
  
  return (
    <div className="App">
        <Shop itemList={itemList}></Shop>
    </div>
  );
}

export default App;
