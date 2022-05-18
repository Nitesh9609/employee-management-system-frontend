import { employeeType } from "./empDetail.type";

const INITIAL_STATE={
    employee: []
}

export const employeeReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case employeeType.EMPLOYEE_DETAILS:
            return{
                ...state,
               employee: action.payload
            }
            
    
        default:
            return state;
    }
}