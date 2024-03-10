"use strict";
let animals = [
    "dog",
    "cat",
    "parrot",
];
animals.forEach((animal) => {
    if (animal == "dog") {
        console.log(animal + " is a loyal companion");
    }
    else if (animal == "cat") {
        console.log(animal + "s are beautiful");
    }
    else if (animal == "parrot") {
        console.log(animal + " are smart");
    }
});
console.log("each of these pets have unique characteristics!!");
