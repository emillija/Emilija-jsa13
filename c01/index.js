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


let studenti = [
    {ime: 'P', prosek: 8},
    {ime: 'J', prosek: 9},
    {ime: 'S', prosek: 6},
    {ime: 'I', prosek: 10},
    {ime: 'G', prosek: 7}
];

studenti.sort(function (a, b) {
    return b.prosek - a.prosek;
});


// studenti.reverse();
console.log(studenti);