import { initialState } from "./initialState";

 const AddSumReducer = (oldState=initialState,action) =>{
    console.log(action)
    let newState = oldState ;
    switch(action.type){
        case 'ADD':
          return {
            ...newState,
            value:newState.value + action.payload
          };
          break;
        case 'SUB':
            return {
                ...newState,
                value:newState.value - action.payload
              };
        case 'RESET':
            return {
                ...newState,
                value:action.payload
              };
          break;
       
          default:
    }
    return newState;
}

export default AddSumReducer;