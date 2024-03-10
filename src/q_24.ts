var test_var_1:string = "random1";
var test_var_2:string = "random0";
var test_var_3:string = "random1";
var test_var_4:string = "RANDOM TEXT";

var number_1:number = 4;
var number_2:number = 2;
var number_3:number = 9;

var test_array = [
    1,
    2,
    3,
];

console.log("is test_var_1 equal to test_var_2:",test_var_1==test_var_2?true:false);
console.log("is test_var_3 equal to test_var_1:",test_var_3==test_var_1?true:false);
console.log("is test_var_4 lowercase:",test_var_4.toLocaleLowerCase() == test_var_4?true:false);
console.log("Is variable number_1 equal to number 2",number_1 == number_2?true:false);
console.log("Is variable number_1 not equal to number 2",number_1 != number_2?true:false);
console.log("Is variable number_3 greater than number 1",number_3 > number_1?true:false);
console.log("Is variable number_3 less than number 1",number_3 < number_1?true:false);
console.log("Is variable number_3 less than number 1",number_3 <= number_1?true:false);

console.log("is variable number_3 greater than variable number_1 or variable number_2",(number_3 > number_1) ||(number_3 != number_2)?true:false);
console.log("is variable number_3 greater than variable number_1 and variable number_2",(number_3 > number_1) &&(number_3 == number_2)?true:false);

console.log("is 2 in test_array",test_array.includes(1)?true:false);
console.log("is 5 in test_array",test_array.includes(5)?true:false);