import { tokenType } from "./token.type";

const INITIAL_STATE={
    token: ''
}

export const tokenReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case tokenType.JWT_TOKEN:
            return{
                ...state,
                token: action.payload
            }
            
    
        default:
            return state;
    }
}