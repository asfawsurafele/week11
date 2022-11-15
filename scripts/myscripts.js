// METHOD 1
// function greet(name){
//     console.log(`Hello ${name}`);
//     // same as console.log(`Hello ` + user)
// }

// greet(`Surafele`);

// METHOD 2 
// const greeting = function greet(name){
//     console.log(`Hello ${name}`)
// }

// greeting(`Surafele`)

// METHOD 3
// let greeting = (name) =>
// {
//     console.log(`Hello ${name}`);
// } 

// greeting()
// METHOD 3 IS UNHOISTABLE

function greet(name, time = 'Day'){
    console.log(`Good ${time} ${name}`);
}
greet('Surafele')
greet('Surafele', 'Night', 'hi')
// greet(`Surafele`);
