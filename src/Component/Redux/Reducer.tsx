const initialState=''

export const ReducerProduct=(state = initialState, action:any)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
          return  action.payload;
        case 'TOTAL_PRICE':
           return action.payload
        default:
            return state 
    }
}