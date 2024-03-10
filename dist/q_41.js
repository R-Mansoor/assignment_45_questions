"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = [
    "magician1",
    "magician2",
    "magician3",
    "magician4",
];
function show_magician(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    magicians.forEach((magician, index) => {
        magicians[index] = "Great " + magician;
    });
}
;
show_magician(magicians);
make_great(magicians);
show_magician(magicians);
