import React from 'react';
import './App.css';
import {GlobalStateProvider} from './contex'

import NumComp from './NumComp'
import TextComp from './TextComp'
import BoolComp from './Boolcomp'

const App = () => {
  return (
    <GlobalStateProvider>
      <h1 className='title'>Global State</h1>
      <div className='container'>
        {/* Number componet */}
        <NumComp />
        {/* Text componet */}
        <TextComp />
        {/* Bool componet */}
        <BoolComp />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
