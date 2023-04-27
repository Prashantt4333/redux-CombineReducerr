import { initialState } from "./initialState";

 const MultiDiviReducer = (oldState=initialState,action) =>{
    console.log(action)
    let newState = oldState ;
    switch(action.type){
        case 'MULTPBY2':
          return {
            ...newState,
            value:newState.value * action.payload
          };
          break;
        case 'MULTPBY5':
            return {
                ...newState,
                value:newState.value * action.payload
              };
        case 'DIVIDEBY2':
            return {
                ...newState,
                value:newState.value / action.payload
              };
        case 'DIVIDEBY5':
            return {
                ...newState,
                value:newState.value / action.payload
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

export default MultiDiviReducer;