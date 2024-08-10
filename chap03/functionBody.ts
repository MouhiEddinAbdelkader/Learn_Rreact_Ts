const myFunction = (message: string): void => {
    console.log(message);
}

myFunction("hello")

const func = (message: string) => console.log(message);

const func1 = () => ({ name: 'dave' });

const func2 = () => {

    const val = 20;

    return val;

}

console.log(func("hi i want"));

console.log(func1());

console.log(func2());