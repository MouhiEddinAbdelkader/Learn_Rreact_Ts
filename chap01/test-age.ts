interface User  {
    name: string;
    age: number;
}

function canDrive(usr: User) {
    console.log("user is", usr.name);

    if (usr.age >= 16) {
        console.log("user can drive");
    } else {
        console.log("user can not drive");
    }
}

// Let's pretend sometime later someone else uses the function canDrive

const usr: User = {
    name: "Tom",
    age: 25
};

canDrive(usr);
