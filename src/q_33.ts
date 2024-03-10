let check_numebers:number[] = [
    1,2,3,4,5,6,7,8,9
];

check_numebers.forEach((check_numeber)=>{
    if(check_numeber == 1){
        console.log(check_numeber+"st number ");
    }else if(check_numeber <= 2){
        console.log(check_numeber+"nd number");
    }else if(check_numeber <= 3){
        console.log(check_numeber+"rd number");
    }else{
        console.log(check_numeber+"th number");
    }
});
