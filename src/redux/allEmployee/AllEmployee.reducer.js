import { allEmployeeType } from "./AllEmployee.type";
const INITIAL_STATE={
    allEmployee: []
}

export const allEmployeeReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case allEmployeeType.ALL_EMPLOYEE_DETAILS:
            return{
                ...state,
               allEmployee: action.payload
            }
            
    
        default:
            return state;
    }
}