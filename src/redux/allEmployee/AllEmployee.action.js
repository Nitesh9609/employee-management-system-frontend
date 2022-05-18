import { allEmployeeType } from "./AllEmployee.type"

export const storeAllEmployee = (allEmployeeData) =>({
    type: allEmployeeType.ALL_EMPLOYEE_DETAILS,
    payload: allEmployeeData
})