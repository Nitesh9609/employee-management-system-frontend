import { employeeType } from "./empDetail.type"

export const storeEmployee = (employeeData) =>({
    type: employeeType.EMPLOYEE_DETAILS,
    payload: employeeData
})