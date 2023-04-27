import { legacy_createStore as createStore} from 'redux';


import rootReducer from "./_reducers/index"


export const  store = createStore(rootReducer);