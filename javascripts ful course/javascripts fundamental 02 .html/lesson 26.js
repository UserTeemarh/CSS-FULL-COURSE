'use strict';

const info = [
    'fatimah',
    'khan',
    2023 - 1998,
    'teacher',
    true
];
const empty = [];
// backward loop
for (let i = info.length; i >= 0; i--) {
    console.log(i, info[i], typeof info[i]);
    empty.push(typeof info[i]);
}
console.log(empty);


// loop in loop

for (let mealPlan = 1; mealPlan <= 3; mealPlan++){
    console.log(`____ My meal plan: ${mealPlan}_____`)
    for (let eatplan = 0; eatplan <= 5; eatplan++) {
        console.log(`${mealPlan} i eat ${eatplan} in a day`)
    }
}


const  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = array.length; i >= 0; i--) {
    console.log(array[i])
}


const esther = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

for(let index = esther.length; index >= 0; index--) {
    console.log(esther[index])
}




 for (let j = 0; j <= 3; j++) {
    console.log(`___the parent ${j} Iteration`);
    for (let i = 0; i <= 5; i++) {
        console.log(`The child ${i} element___`)
    }
 }


 for (let index = 1; index <= 5; index++) {
    console.log(`THE PARENT ITERATION ${index}`);
    for (let i = 1; i <= 5; i++) {
        console.log(`The children Iteration ${i}`)
    }
 }




const countries = [
    ['senegal', 'ghana'],
    ['south africa'],
    ['togo','benin']
]
for (let i = 0; i < countries.length; i++) 
for (let y = 0; y < countries[i].length; y++)
console.log(`neigbour: ${countries[i] [y]}`)