// const student ={
//     name:'nayeem',
// }

// student.department='cse'
// delete student.name
// console.log(student)

// //find the biggest number between three numbers 

// let number1=prompt('enter first number:')
// let number2=prompt('enter second number:')
// let number3=prompt('enter third number:')

// if(number1>number2&&number1>number3){
//     console.log('number1 is grater');
// }else if(number2 >number1&&number2>number3){
//     console.log("number2 is grater");
// }else{
//     console.log('number3 is grater');
// }

const student = {
    // Properties
    firstName: "John",
    lastName: "Doe",
    age: 21,
    major: "Computer Science",
    // Nested object for contact information
}
      

    // Nested object for address
   


    // for(let k in student){
    //     console.log(`${k}:${student[k]}`);  //k er value sob first er value nibe key value
    // }

    // Object.keys(student).forEach((key) => {
    //     console.log(`${key}: ${student[key]}`);
    //   })

// Object.keys(student).forEach((key)=>{
//     console.log(`${key}:${student[key]}`);
// })


// Object.keys(student).forEach((key)=>{
//     console.log(`${key}:${student[key]}`); //foreach loop
// })


// for(key in student)
//     console.log(`${key}:${student[key]}`);  //for in


//for of

for(let[key,value] of Object.entries(student)){
    console.log(key,value);
}

let jason=JSON.stringify(student) //convert object into jason 
console.log(jason); 

let a=JSON.parse(jason) //converting jason to object 
console.log(a);
