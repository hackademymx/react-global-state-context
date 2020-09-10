import React from 'react';
import './App.css';
import { StoreProvider } from "./store";
import { ChildComponent } from "./childComponent"

// 1) crear store
// 2) creear storeAPI
// 3) childComponent
// 4) app 

const App = () => {
  return (
    <StoreProvider>
      <ChildComponent/>
    </StoreProvider>
  )
}

export default App;
