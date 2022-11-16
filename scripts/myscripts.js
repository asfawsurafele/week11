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

// //Default Parameters for Functi
// function greet(name, time = 'Day'){
//     console.log(`Good ${time} ${name}`);
// }
// greet('Surafele')
// greet('Surafele', 'Night',)
// // greet(`Surafele`);
// let r = prompt('Enter a radius:');
// console.log(r)

// function circleArea (radius)
// {
//     return Math.PI * radius * radius;
// }


// let area = circleArea(r);

// alert(`The area: ${area.toFixed(2)}`);

// let r = prompt('Enter a radius:');
// console.log(r)

// function circleArea (radius)
// {
//     let radiusP = document.querySelector('#radius');
//     let resultP = document.querySelector('#result');
//         radiusP.textContent = radius;
//     let final = Math.PI * radius * radius;
//     resultP.textContent = final;
//     return resultP;
// }

// const answer = circleArea(r)

// alert(`The area of a circle with radius ${r} is ${answer}`)
const unorderedList = document.querySelector(".shopping");

function populateList(list)
{
    list.forEach(element => {
    let listItem = document.createElement("li");
    listItem.textContent = element
    unorderedList.appendChild(listItem);
    
    });
}

const shoppingList =['Cheese', 'bread', 'green pepper']
populateList(shoppingList)

function switchclass (){
unorderedList.classList.remove('circlelist');
unorderedList.classList.add('squareList');
}
switchclass()

const liItems = document.querySelectorAll('.shopping li')

// liItems.forEach(element => {
//     if (element != 'green'){
//         element = 'green'
//     }
// });

function changeColor(list){
    list.forEach(element => {
        if (element.textContent.includes('green')){
            element.classList.add('green')
        };
    }
)};

changeColor(liItems)


