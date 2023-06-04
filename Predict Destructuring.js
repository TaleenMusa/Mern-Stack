// Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar) // output : Tesla (randomCar assigns the first element of the cars array)
console.log(otherRandomCar) // output : Mercedes (otherRandomCar assigns the second element of the cars array )

// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // output : Elon
console.log(otherName); // output : Elon

// Problem 3 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password); // output : 12345
console.log(hashedPassword); // output : undefined

// Problem 4



// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); // output : value
console.log(secondKey); // output : [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // output : 1
console.log(willThisWork); // output :






