import React, {useState} from 'react';
import PapuaPage from './Screen/Papua'
import IndonesiaPage from './Screen/Indonesia'


function App() {

  return (
    <div style={{padding:20}}>
      <PapuaPage/>
      <br/>
      <IndonesiaPage/>
    </div>
  );
}

//background: linear-gradient(90deg, rgba(144,205,247,1) 0%, 
// rgba(134,194,236,1) 5%, rgba(128,186,229,1) 10%, rgba(121,178,221,1) 15%, rgba(117,172,216,1) 20%, rgba(113,167,211,1) 25%, 
// rgba(107,160,204,1) 30%, rgba(100,152,196,1) 35%, rgba(93,144,188,1) 40%, rgba(84,133,178,1) 45%, rgba(78,126,171,1) 50%, 
// rgba(70,116,162,1) 55%, rgba(61,106,152,1) 60%, rgba(55,99,145,1) 65%, rgba(49,91,138,1) 70%, rgba(45,85,133,1) 75%, 
// rgba(38,77,125,1) 80%, rgba(34,72,120,1) 85%, rgba(27,64,112,1) 90%, rgba(16,52,100,1) 95%, rgba(0,33,83,1) 100%);

export default App;
