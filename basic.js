// variable
let first = ("hiii")
let second = ("da")
console.log(first + second);


//adding and numbers
let number = 5
console.log(number +6);


//string
let numberr = 5
console.log(number +6);



//update method
let point =50;
point = 100;
console.log(point);



//const
const b = 10
//can't update the value  , you will change get error

console.log(b);



//undefind
let a; //this line no value  given
console.log(a);



//if else statement
let payment = false;

if(payment){
    console.log("welcome");
}

else{
    console.log("try again");
}


//mini if else and elseif
let AdminToUser = 'dai';

if AdminToUser == ("student"){
    console.log('hi student');
}

else if AdminToUser == ('admin'){
    console.log('hi admin');
}
else if AdminToUser == ('dai'){
    console.log('neeya da');
}

else{
    console.log('veilya poo');
}


// && operator it shoud be bothside true ,not compare
let rohith = true;
let pooja = false;
if(rohith && pooja){
    console.log ("family is happy");
}
else{
    console.log("family is tension");
}


// (||) or operator, it is any one them true
let gmail = true;
let fb = false;
if(gmail || fb){
    console.log("welcome");
}

else{
    console.log("login pls");
}


// array concept

var phones= ['samsung','iphone','blackberry','mi'];

console.log(phones[2]);
console.log(phones[0]);
console.log("we have " + phones.length+ " phones");
//another concept
console.log(`we have ${phones.length} phones`)

// basic function

function fullname(firstname,lastname){
    console.log(`${firstname}${lastname}`);
}

fullname('rohith','c')

//functio 2

function addition(num1,num2){
    console.log(num1+num2);
}

addition(50,50)

//functio 3

let hi = function(name){
    console.log(`${name}`,"gamer");
}

hi('rohith');

//function 4

function score(num1,num2){
    let score =(num1 + num2)
    return score
}

console.log(`your score is ${score(20,30)}`);


//for each concept
let fruit=['Mon','Tue','Wed','Tus',"Fri"];


fruit.forEach(function(fruits,position){
    console.log(`${position+1}.${fruits}`);
})


// for each 2
let numbers = ['1','2','3','4','5','6','7','8','9'];

numbers.forEach(function(value,position){
    console.log(`${position}. ${value}`);
})


//for loop
//for(declare ; condition ; increase/decresase)
// i=i+1 (or) i++ this are same method but shortcut 
for(numbers=0 ; numbers<10 ; numbers= numbers+1){
    console.log(numbers);
}


// MATH Libraery
//ceil and floor

// ceil
let hello=(22/9);
console.log(Math.ceil(hello));  // this answer is increase the value to roundof
 
// floor
let rhi=(22/9);
console.log(Math.floor(rhi)); // this answer decrese the value of round off


// random number (Math.random)
let upper = 10;
let lower = 0;

console.log(Math.ceil( Math.random()*(upper - lower)));


// arrow functio but same in normal function

let cbi =(name) => {
    console.log(`hi ${name} nalla erukiya`);
}
console.log(cbi('rohith'));


//arrow function
let hi = (name) =>`hi ${name}`
console.log(hi('rohith '))



//api function 

let myobject= {
    title:'js',
    curserate:'$200',
    language:'tamil'
}
console.log(`congragilation you got ${myobject.title} in ${myobject.language}`)