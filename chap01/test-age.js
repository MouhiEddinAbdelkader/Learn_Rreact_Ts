function canDrive(usr) {
    console.log("user is", usr.name);
    if (usr.age >= 16) {
        console.log("user can drivre");
    }
    else {
        console.log("user can not drivre");
    }
}
// let's pretend sometime later someone else uses the   //function canDrive
var tom = {
    name: "tom",
    age: 25
};
canDrive(tom);
