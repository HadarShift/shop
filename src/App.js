import React from 'react';
import './App.css';
import Shop from './Components/Shop';
import {itemList} from './Components/itemClass';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
        <Shop itemList={itemList}></Shop>
    </div>
  );
}

export default App;
