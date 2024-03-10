var person_name:string = "Eric";

var upper_case_name = person_name.toUpperCase();
var lower_case_name = person_name.toLocaleLowerCase();
var title_case_name = person_name.slice(0,1).toUpperCase() + person_name.slice(1);

console.log(upper_case_name);
console.log(lower_case_name);
console.log(title_case_name);