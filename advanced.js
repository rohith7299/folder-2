// buttom click 
document.querySelector('button'),addEventListener('click',function(event){
    let h1 = document.querySelector('h1')
    h1.textContent= 'change'
 })
 
 
 // try and catch method references
let covertMoney = function(money){
    console.log (money * 69);
}

try {
    console.log( covertMoney(3));
} catch (error) {
    console.error('failed to convert money to number')
}

//adding element with js
let pTag = document.createElement('h1');
pTag.textContent = 'rohith';

document.querySelector('body').appendChild(pTag);


//chanfing all letters in particular parameters
let mtTAg = document.querySelectorAll('p');
mtTAg.forEach((p) => {
    p.textContent = 'changing java'
})

// editing a text 
let mytag = document.getElementmtTAgyId('para');
   mytag .textContent = 'changing java script'

//bg colore change
function red(){
    let red = document.querySelector('body')
    red.style.backgroundColor ='red';

}
//next colour change
function white(){
    let white = document.querySelector('body')
    white.style.backgroundColor ='white';
}
