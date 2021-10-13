//open file data.json
//read data
//convert in js object/array JSON.parse(...)
//filter objects(value > 7.5)
//new array convert JSON.stringify(...)
//converted data write in file with name filtered_data.json

const fs = require('fs');

const read = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err) return reject(err);
            return resolve(data);
        })
    })
}

const write = (fileName, writeFile) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, writeFile, (err) => {
            if(err) return reject(err);
            return resolve();
        })
    })
}

const main = async () => {
    try {
        let data = await read('data.json');
        let parsedData = JSON.parse(data);

        //value > 7.5
        let output = parsedData.filter(d => d.value > 7.5);
        let outputString = JSON.stringify(output);
        await write('filtered_data.json', outputString);
        
        //names starting with p
        let pNames = parsedData.filter(d => d.name.toLowerCase()[0] === 'p');
        let pNamesString = JSON.stringify(pNames);
        await write('pnames_data.json', pNamesString) 
    } catch (err) {
        console.log(err);
    }
};

main();