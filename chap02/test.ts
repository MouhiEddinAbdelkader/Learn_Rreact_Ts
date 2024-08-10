let unionObj: null | {name: string} = null
 
unionObj = {name : 'jon'}

console.log(unionObj);

// Literal types
let literal: "tom" | "linda" | "jeff" | "sue" = "linda";

literal = "linda";

console.log(literal);
console.log(literal);

// Type aliases

type Points = 20 | 30 | 24 | 25

let score: Points = 20 ;

console.log(score);

type ComplexPerson = {

    name: string,

    age: number,

    birthday: Date,

    married: boolean,

    address: string

}

// Function return types

