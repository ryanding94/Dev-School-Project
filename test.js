// function fibonacci(n){
// }

// Always end return statements with ;
// return statements on the same line

// Variables:
// var age = 18; // number
// var alice = {name: ‘Alice’, age: 18] //object
// var languages = [“Java”, “Javascript”, “C#”] //array

console.log("Hello World");

var x=3;
var y = 1/x;
console.log(y); //equals 0.33333

var z = parseint("3")
console.log(z); //will equal 3

//parseint(-0) = NaN
//console.log(isNaN(z)) = true

var a = [1,2,3];
console.log(a.length); //equals 3
for (var item in a){ //will show index, not the item itself
    console.log(item);
}
for (var index in a){ //will show item itself
    console.log(a[index]);
}

a[2] = 4;
console.log(a.length)

for (var i =0; i<a.length; i++){
    console.log(a[i]);
}

//mrarray.push(post)to add to array

//sorting is built into JavaScript

var a = [1,3,4,2,6,2,4,7,8];
a.sort();
a.forEach(function (item){
    console.log(item);
});
