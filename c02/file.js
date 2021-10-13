const fs = require('fs');

// const read = (fileName) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, (err, data) => {
//             if(err) return reject(err);
//             return resolve(data);
//         })
//     })
// }

// read('txt.txt')
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })


// // fs.writeFile(file, data[, options], callback)
// const write = (fileName, writeFile) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(fileName, writeFile, (err) => {
//             if(err) return reject(err);
//             return resolve();
//         })
//     })
// }

// const writeFile = async () => {
//     try {
//         await write('txt.txt', 'blabla2')
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// writeFile();

