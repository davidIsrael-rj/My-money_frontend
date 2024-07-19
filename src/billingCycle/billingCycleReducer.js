const INITIAL_STATE ={LIST: []}

export default (state = INITIAL_STATE, action)=>{
    switch (actionTypes.type){
        case 'BILLING_CYCLES_FETCHED':
            return {...state, list: action.payload.data}
        default:
            return state
    }
}