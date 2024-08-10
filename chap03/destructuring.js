function getEmployee(id) {

    return {

        name: 'John',

        age: 35,

        address: '123 St',

        country: 'United States'

    }

}

const { name: fullName, age } = getEmployee(22);

console.log('employee', fullName, age);
console.log('--------------')

function getEmployeeByid(id) {
    return [
        id, 
        'iset',
        'sfax'
    ]
}
const [id, affice, place] = getEmployeeByid(22);
console.log('employ', id, affice, place);


// reset
function doSomething(a, ...others) {

    console.log(a, others, "/", others[others.length - 1]);

}

doSomething(1,2,3,4,5,6,7);

// find
console.log("find")
const items = [

    { name: 'jon', age: 20 },

    { name: 'linda', age: 22 },

    { name: 'jon', age: 40}

]

const jon = items.find((item) => {

    return item.name === 'jon'

});

console.log(jon);

// filter

console.log("filter")
const itemFiltered = items.filter((item) => {
    return item.name == 'jon'
})
console.log(itemFiltered)

