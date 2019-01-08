import { createStore , combineReducers } from 'redux';

const rootReducer = combineReducers({

})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__()

)

export default store;
