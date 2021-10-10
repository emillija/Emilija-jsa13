// console.log('Hello World');
// console.dir('Hello World');
// console.error('Crash&Burn!');
// let table = [
//     {fname: 'Qwerty', lname: 'Qwerty'},
//     {fname: 'Qwerty', lname: 'Qwerty'}
// ]
// console.table(table);

// setTimeout(() => {
//     console.log('suki')
// }, 2000)
// console.log('muki')


// let array = [1,2,3,4,5,6,7]
// let n3 = array.reduce((acc, v) => {
//     return acc + v;
// })
// console.log(n3)

const myTimeout = (timeout) => {
    return new Promise((success, fail) => {
        setTimeout(() => {
            console.log('first');
            success(); // the function placed in the .then(...)
        }, timeout);
    });
};

myTimeout(2000)
    .then(() => {
        console.log('second');
        return myTimeout(1000);
    })
    .then(() => {
        console.log('third');
    })
    .catch(err => {
        console.error(err);
    });

const main = async () => {
    try {
        await myTimeout(2000); // wait until done then go to next line
        console.log('second');
        await myTimeout(1000); // wait until done then go to next line
        console.log('third');
    } catch(err) {
        console.error(err);
    }
};

main();

// map
// reduce
// sort
// forEach
// filter

// let students = [
//     {name: 'P', value: 8},
//     {name: 'J', value: 9},
//     {name: 'S', value: 6},
//     {name: 'I', value: 10},
//     {name: 'G', value: 7}
// ];

// students.sort(function (a, b) {
//     // return a.value - b.value;
//     return b.value - a.value;
// });

// // students.reverse();
// console.log(students);
