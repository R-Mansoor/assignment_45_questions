"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = [
    "magician1",
    "magician2",
    "magician3",
    "magician4",
];
function show_magicians(show_magicians) {
    show_magicians.forEach((show_magician) => {
        console.log(show_magician);
    });
}
function make_great(change_magicians) {
    let copy_magicians = [...change_magicians];
    change_magicians.forEach((change_magician, index) => {
        change_magicians[index] = "Great " + change_magician;
    });
    return copy_magicians;
}
;
let original = make_great(magicians);
show_magicians(magicians);
show_magicians(original);
