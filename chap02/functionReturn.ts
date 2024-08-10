// Function return types

// function runMore(distance: number): number {
//     return distance + 10
// }

function eat(calories: number) {
    console.log(`i eat ${calories} calories`)
}
function sleepIn(hours: number): void {

    console.log("I slept " + hours + " hours");
}

let ate = eat(50)
console.log(ate)
let slept = sleepIn(10);
console.log(slept);

// Functions as types