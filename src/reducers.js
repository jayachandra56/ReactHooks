
export const cakeReducer=(state,action)=>{
    switch(action.type){
      case 'BUY_CAKE':{
        return {noOfCakes:state.noOfCakes-action.number}
      }
      default:{
        return state
      }
    }
  }

export const iceReducer=(state,action)=>{
    switch(action.type){
      case 'BUY_ICE':{
        return {noOfIceCreams:state.noOfIceCreams-action.number}
      }
      default:{
        return state
      }
    }
  }