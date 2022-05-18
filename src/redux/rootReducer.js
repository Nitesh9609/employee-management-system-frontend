import {combineReducers} from 'redux'
import { employeeReducer } from './empDetails/empDetail.reducer'
import { tokenReducer } from './token/token.reducer'
import { allEmployeeReducer } from './allEmployee/AllEmployee.reducer'

export const rootReducer = combineReducers({
    useToken: tokenReducer,
    DisplayEmployee: employeeReducer,
    DisplayAllEmployee: allEmployeeReducer
})