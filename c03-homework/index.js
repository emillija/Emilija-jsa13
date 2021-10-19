const fs = require('fs');
const students = require('./students.json');
const express = require('express');

const api = express();
api.use(express.json());

const read = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        })
    })
}

const write = (fileName, writeFile) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, writeFile, (err) => {
            if (err) return reject(err);
            return resolve();
        })
    })
}

api.get('/students', (req, res) => {
    res.status(200).send(students);
});

api.post('/students', async (req, res) => {
    try {
        let data = await read('students.json')
        let parsedData = JSON.parse(data);
        let output = [...parsedData, req.body]
        console.log(output);
        let outputString = JSON.stringify(output);
        await write('students.json', outputString);
    }
    catch (err) {
        console.log('Error!');
    }
    res.status(201).send(req.body)
})

api.get('/students/:id', (req, res) => {
    if (!students[req.params.id]) {
        return res.status(404).send('Not found');
    }
    res.status(200).send(students[req.params.id]);
});

api.put('/students/:id', async (req, res) => {
    try {
        let data = await read('students.json')
        let parsedData = JSON.parse(data);
        const accountIndex = parsedData.findIndex((account) => account.id == req.params.id);

        const updatedStudent = {
            id: parsedData[accountIndex].id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            gpa: req.body.gpa,
        }
        console.log(updatedStudent);
        parsedData[accountIndex] = updatedStudent;
        res.send(updatedStudent);

        let outputString = JSON.stringify(parsedData);
        await write('students.json', outputString);
    }
    catch (err) {
        console.log(err);
    }
});

api.patch('/students/:id', async (req, res) => {
    try {  
        let data = await read('students.json')
        let parsedData = JSON.parse(data);
        const accountIndex = parsedData.findIndex((account) => account.id == req.params.id);

        const updatedStudent = {
            id: parsedData[accountIndex].id, 
            first_name: req.body.first_name || parsedData[accountIndex].first_name,
            last_name: req.body.last_name || parsedData[accountIndex].last_name,
            gender: req.body.gender || parsedData[accountIndex].gender,
            gpa: req.body.gpa || parsedData[accountIndex].gpa,
        }
        console.log(updatedStudent);
        parsedData[accountIndex] = updatedStudent;
        res.send(updatedStudent);

        let outputString = JSON.stringify(parsedData);
        await write('students.json', outputString);
    } catch (err) {
        console.log('Error!');
    }
});

api.delete('/students/:id',async (req, res) => {
    try{
        let data = await read('students.json');
        let parsedData = JSON.parse(data);

        let filterData = parsedData.filter((u, i) => i != req.params.id);
        res.status(204).send(filterData);

        let stringData = JSON.stringify(filterData);
        await write ('students.json', stringData)        
    }
    catch(err){
        console.log('Error!');
    }
    
});

api.listen(10000, err => {
    if (err) {
        return console.log(err);
    }
    return console.log('Server successfully started on port 10000')
});

