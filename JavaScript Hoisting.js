// 1
// var hello;
// console.log(hello);
// hello = 'world';

console.log(hello);
var hello = 'world';



// 2
// var needle;
// needle = 'haystack';
// test();
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle); //Predicted output: magnet
// }

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}


// 3
// var brendan; 
// brendan = 'super cool'; 
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan); // Output: super cool

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// 4
// var food; 
// food = 'chicken'; 
// console.log(food); // Output : chicken
// eat();

// function eat(){
//     var food; 
//     food = 'half-chicken'; 
//     console.log(food); // Output: half-chicken
//     food = 'gone'; 
// }

var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//5
// var mean; 
// mean(); 
// console.log(food); // Error: food is not defined

// mean = function() {
//     var food; 
//     food = "chicken"; 
//     console.log(food); // Output: chicken
//     food = "fish"; 
//     console.log(food); // Output: fish
// }
// console.log(food); 


mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// 6
// var genre; 
// console.log(genre); // Output: undefined

// genre = "disco"; 
// rewind();
// function rewind() {
//     var genre; 
//     genre = "rock"; 
//     console.log(genre); // Output: rock

//     genre = "r&b"; 
//     console.log(genre); // Output: r&b
// }

// console.log(genre); // Output: 'disco'


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// 7
// var dojo; 
// dojo = "san jose";
// console.log(dojo); // Output: san jose
// learn(); 
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); // Output: seattle

//     dojo = "burbank"; 
//     console.log(dojo); // Output: burbank
// }

// console.log(dojo); // Output: san jose


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);



