"use strict";
let usernames = [
    "admin",
    "Eric",
    "Daniel",
    "John",
];
usernames.forEach((username) => {
    if (username == "admin") {
        console.log("Hello " + username + ", would you like to see a status report?");
    }
    else {
        console.log("Hello " + username + ",thank you for logging in again.");
    }
});
