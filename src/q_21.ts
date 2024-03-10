var employee: {
    emp_id:number;
    emp_name:string;
    emp_department:string;
};

employee = {
    emp_id:12,
    emp_name:"John Doe",
    emp_department:"IT",
}

console.log("Employee Information");
console.log(`Emp Id: ${employee.emp_id}`);
console.log(`Emp Name: ${employee.emp_name}`);
console.log(`Emp Department: ${employee.emp_department}`);