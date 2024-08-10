// The never type
// This type is going to sound quite strange at first. A never type is used to indicate a function that never returns (completes), or a variable that is not set to anything, not even null. At first glance, this sounds like the void type. However, they are not at all the same. In void, a function does return, in the complete sense of the word, it just does not return any value (it returns undefined, which is no value). In the case of never, the function does not finish at all. Now, this seems totally useless but it's actually quite useful for indicating intent.

// Again, let's look at an example. Create a file called never.ts and add the following code:

// function oldEnough(age: number): never | boolean {

//     if(age > 59) {

//         throw Error("Too old!");

//     }

//     if(age <=18){

//         return false;

//     }

//     return true;

// }

// As you can see, this function returns a union type that is either never or a 
// Boolean. Now, we could have only indicated the Boolean and the code would still 
// work. However, in this function, we are throwing an error if the person is over a
//  certain age, indicating that this is an unexpected age value. So, since 
//  encapsulation is a high-level principle for writing good-quality code, it 
//  is beneficial to indicate explicitly that a failure of the function to return
//   could occur without needing the developer to know about the internals of how the 
//   function works. never provides that communication.

// In this section, we learned about the many built-in types in TypeScript.
//  We were able to see why using these types can improve our code quality and 
//  help us catch errors early on in the coding cycle. In the next section, 
//  we'll learn about how we can use TypeScript to create our own types, and also
//   follow object-oriented programming principles.


function oldEnough(age: number): never | boolean {
    if(age > 59) {

        throw Error("Too old!");

    }

    if(age <=18){

        return false;

    }

    return true;
}

console.log(oldEnough(10))