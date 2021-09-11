module.exports = class EmployeeController{
    /**
     * 
     * @param {id: int, filters: [{string: any}]} params
     */
    constructor(employeeModel) {
      this.employeeModel = employeeModel
    }
    getEmployee(params) {
      let employee = this.employeeModel.get(params)
  
      return this.employeeModel.get(params).then((employee) => {
        // do whatever you want with employee
        return employee
      })
  
    }
  }