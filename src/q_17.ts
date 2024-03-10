var names:string[] = [
    "Ali",
    "Ahmed",
    "Bethoven"
];

names.forEach((name:string,index:number)=>{
    if(name == "Bethoven"){
        console.log("Mr/Mrs "+name+" has unfortunately ceased to exist therefore won't be gracing us with their presence.");
    }
});

names.forEach((name:string,index:number)=>{
    if(name == "Bethoven"){
        names[index] = "Laila";
    }
});

names.forEach((name:string,index:number)=>{
    console.log("Mr/Mrs "+name+" is cordially invited to an extravagant dinner at the Heaven/Hell hotel. Awaiting your arrival at 00:00.");
});

console.log("Hey People we found a bigger table!!!!");
names.unshift("Sarah");
names.push("Daniel");
var middle = Math.trunc(names.length/2);
names.splice(middle,0,"Frank");

names.forEach((name:string,index:number)=>{
    console.log("Mr/Mrs "+name+" is cordially invited to an extravagant dinner at the Heaven/Hell hotel. Awaiting your arrival at 00:00.");
});


console.log("Sorry Guys we can only invite two people");


function recursion(names:any){

    if(names.length >= 3){
        console.log("Sorry "+names[0]+" you are not invited due to management problems.");
        names.shift();
        recursion(names);
    }else{
        if(names.length > 0){
            console.log("Mr/Mrs "+names[0]+" is still invited.");
            names.shift();
            recursion(names);
        }

        return names;


        // return names;
    }

}

var new_names:string[] = recursion(names);

console.log(new_names);