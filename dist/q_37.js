"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_tshirt(size = "Large", t_shirt_text) {
    console.log("The t_shirt size is:" + size + " and the t_shirt text is: " + t_shirt_text);
}
make_tshirt(undefined, "I Really Like Typescript");
make_tshirt("Medium", "I Really Like Typescript");
make_tshirt("small", "This road is long!");
