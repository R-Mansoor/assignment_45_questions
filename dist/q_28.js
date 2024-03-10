"use strict";
var age = 2;
if (age == 2) {
    console.log("Age is: " + age + ". Person is baby.");
}
else if (age > 2 && age < 4) {
    console.log("Age is: " + age + ". Person is todler.");
}
else if (age > 4 && age < 13) {
    console.log("Age is: " + age + ". Person is kid.");
}
else if (age > 13 && age < 20) {
    console.log("Age is: " + age + ". Person is teenageer.");
}
else if (age > 20 && age < 65) {
    console.log("Age is: " + age + ". Person is adult.");
}
else if (age > 65) {
    console.log("Age is: " + age + ". Person is elder.");
}
