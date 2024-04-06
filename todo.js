
 let myTodoList = ['wakeup','code','sleep','repeat'];
// // (push)insert new elemwnt to last
myTodoList.push("hello");
// //(unshift)insert new elemwnt to first
 myTodoList.unshift("hell");
 console.log(myTodoList);

 myTodoList.forEach(function(value,position){
     console.log(`${position + 1}.${myTodoList}`);
 })


 // for loo method
let myTodo = ['wakeup','code','sleep','repeat'];
for(i=0 ; i<myTodo.length ; i++){
    console.log(`${i+1}.${myTodo[i]}`);}
// 



