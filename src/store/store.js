// src/store.js
import { createStore } from 'redux';
// import rootReducer from './reducers';


const initialState = {
  clicked : [],
  };
  
  const rootReducer = (state = initialState, action) => {

        return state;
    
  };
  

  




const Store = createStore(rootReducer);

export default Store;
