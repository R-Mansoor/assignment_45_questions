import { syncBuiltinESMExports } from "module";

let alien_color:string = "green";

console.log("You selected "+ alien_color);

if(alien_color == "green"){
    console.log("Correct the color is "+alien_color+"you earned 5 points!!");
}else if(alien_color != "green"){
    console.log("the color is'nt  "+alien_color+"you earned 10 points!!");
}

alien_color = "red";

console.log("You selected "+ alien_color);

if(alien_color == "green"){
    console.log("Correct the color is "+alien_color+"you earned 5 points!!");
}else if(alien_color != "green"){
    console.log("the color isn't  "+alien_color+" you earned 10 points!!");
}




export {};