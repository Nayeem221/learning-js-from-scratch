//starting javascript from scratch 

//variable declaration let var and const
//function


// some exercise regarding function 

//add 2 numbers
// function add(a,b){
//     return a+b
// } 
// let result1=add(3,5)
// console.log(result1);
// //multiply two numbers
// function mul(a,b){
//     return a*b
// } 
// let result2=mul(3,5)
// console.log(result2);
// //substract two numbers
// function sub(a,b){
//     return a-b
// } 
// let result3=sub(3,5)
// console.log(result3);
// //modulus two numbers 
// function mod(a,b){
//     return a%b
// } 
// let result4=mod(3,5)
// console.log(result4);


// //write a number wheather the number is positive negative or zero
// let result=prompt('enter a number:');


// if(result<0){
//     console.log('negative');
// }else if(result>0){
//     console.log('positive');
// }else{
//     console.log('zero');
// }
// //write a js function check if the number is odd or even 

// let number=prompt('enter a number ')

// if(number%2==0){
//     console.log('even');
// }else{
//     console.log('odd');
// }
// //square of a number 
// let num=prompt('enter a number:')
 
// let n=num*num
// console.log(n);
// //concat 2 strings

// let n1='nayeem'
// let n2='islam'
// let d=n1.concat(n2)
// console.log(d);
//write a program with a function to check wheather the number is positive negative or zero 
// let ask=prompt('enter a number:')
// function op(){
   
//     if(ask<0) return 'negative'
//     else if(ask>0) return 'positive'
//     else return 'zero'  

        



        
    
    
// }

// let rel=op(ask)
// console.log(rel);

// //write a code to identify which is bigger according to this a,b and c 

// let a = prompt('Enter a number for a')
// let b = prompt('Enter a number for b')
// let c =prompt('Enter a number for c')

// if (a === b && b === c) {
//     console.log('All numbers are equal');
// } else if (a >= b && a >= c) {
//     console.log('a is the biggest');
// } else if (b >= a && b >= c) {
//     console.log('b is the biggest');
// } else {
//     console.log('c is the biggest');
// }

//object
const student= {
   name:'nayeem',
   Id:'2593909-3',
   department:'csee',
addess:{
    road:323,
    house:69,
}

}
console.log(student.name.toLocaleUpperCase);
console.log(student.Id);
console.log(student.department);
console.log(student.addess.house);
