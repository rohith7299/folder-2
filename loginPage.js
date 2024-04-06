// login page gamil and password correction
let email = ("rohithc594@gmail.com");
let password = ('rohith@123');


let emailcheck = function emailcheck(user){
    if(user.includes( '@','gmail','.com')){
        console.log("verified");
    }

    else{
        console.log("pls enter an gmail.com");
    }
}

let passcheck = function passcheck(user){
    if((user.includes('rohith')) && (user.length>5)){
        console.log("verified");
    }

    else{
        console.log("pls enter an password");
    }
}




let complete = function(){
    if(emailcheck  && passcheck  ){
        console.log("your are complete profie");
    }

    else{
        console.log("your are not complete profile");
    }
}

emailcheck(email);
passcheck(password);
complete();