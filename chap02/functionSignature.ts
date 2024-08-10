// Functions as types

type Run = (miles: number ) => boolean

let runner: Run = function(miles: number): boolean {
    if (miles > 10) {
        return true
    } else {
        return false
    }
}
console.log(runner(12))
