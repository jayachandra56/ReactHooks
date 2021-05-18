import React,{useReducer} from 'react';
import './App.css';
import CompoA from './CompoA'
import { context } from './contextCreator';
import { cakeReducer, iceReducer } from './reducers';

const cakeInitialState={
  noOfCakes:10
}

const iceInitialState={
  noOfIceCreams:10
}

function App() {

  const [stateCake, dispatchCake] = useReducer(cakeReducer, cakeInitialState)
  const [stateIce, dispatchIce] = useReducer(iceReducer, iceInitialState)
  return (
    <context.Provider value={{CakeState:stateCake,IceState:stateIce,cakeAction:dispatchCake,iceAction:dispatchIce}}>
      <div className="App">
        <CompoA/>
      </div>
    </context.Provider>
  );
}

export default App;
