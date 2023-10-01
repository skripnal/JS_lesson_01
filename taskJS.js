let admin;
let name;

name = "John";
admin = name;

console.log(admin);

let login = "Admin";
let password = "TheMaster";

if (login === "Cancel"){
    console.log("Canceled");
}else if(login === "Admin"){
    if (password === "Cancel"){
        console.log("canceled");
    }else if(password === "TheMaster"){
        console.log("Welcome!")
    }else{
        console.log("Wrong password");
    }
}else {
    console.log("I don't know you");
}
