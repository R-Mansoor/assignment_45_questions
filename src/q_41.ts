let magicians:string[] = [
    "magician1",
    "magician2",
    "magician3",
    "magician4",
];

function show_magician(magicians:string[]){
    magicians.forEach((magician)=>{
        console.log(magician);
    });
}

function make_great(magicians:string[]){
    magicians.forEach((magician,index)=>{
        magicians[index] = "Great "+magician;
    });
};

show_magician(magicians);
make_great(magicians);
show_magician(magicians);


export {};