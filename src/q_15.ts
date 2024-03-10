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


