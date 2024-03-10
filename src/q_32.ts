let current_usernames:string[] = [
    "Eric",
    "Daniel",
    "John",
    "Peralta",
    "Mclane",
]; 

let new_users:string[] = [
    "ERIC",
    "Mclane",
    "Sarah",
    "Kratos",
    "Loki",
]


new_users.forEach((new_user)=>{
    let count = 0;
    current_usernames.forEach((current_username)=>{
        if(new_user == current_username){
            console.log("Username:"+current_username+" taken please take a new one!");
            count++
        }
    });
    // console.log(count);
    if(count == 0){
        console.log("Username:"+new_user+" available!");
    }
});