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


//01 Code > 1500

// const main = async () => {

// try {
//     let data = await read('country-json/country-by-calling-code.json');
//     let parsedData = JSON.parse(data);

//     let output = parsedData.filter(item => item.calling_code > 1500);

//     console.log(output);
//     let outputString = JSON.stringify(output);
//     await write('data/data01.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//02 Contries starting with the letter U

// const main = async () => {

//     try {
//     let data = await read('country-json/country-by-name.json');
//     let parsedData = JSON.parse(data);

//     let names = parsedData.filter(item => item.country.toUpperCase()[0] === 'U');

//     console.log(names);
//     let namesString = JSON.stringify(names);
//     await write('data/data02.json', namesString) 

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//03 Average male height > 175

// const main = async () => {

//     try {
//     let data = await read('country-json/country-by-avg-male-height.json');
//     let parsedData = JSON.parse(data);

//     let output = parsedData.filter(function(element) {
//         if (element.height > 175) {
//             return true;
//         }
//     });

//     console.log(output);
//     let outputString = JSON.stringify(output);
//     await write('data/data03.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//04 Life expectancy

// const main = async () => {

//     try {
//     let data = await read('country-json/country-by-life-expectancy.json');
//     let parsedData = JSON.parse(data);

//     parsedData.forEach(life => {
//         if (life.expectancy > 72.6) {
//             life.res = 'High life expectancy'
//         }
//         else if (life.expectancy === null) {
//             life.res = '...'
//         }
//         else {
//             life.res = 'Low life expectancy'
//         }
//     });

//     let newData = [...parsedData];
//     let sortData = newData.sort((low, high) => { return high.expectancy - low.expectancy });

//     console.log(sortData);
//     let dataString = JSON.stringify(sortData);
//     await write('data/data04.json', dataString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//05 Continents

// const main = async () => {

//     try {
//     let data = await read('country-json/country-by-continent.json');
//     let parsedData = JSON.parse(data);

//     let output = parsedData.map(item => [item.country, item.continent].join(", a country in "));

//     console.log(output);
//     let outputString = JSON.stringify(output);
//     await write('data/data05.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//06 National symbol

// const main = async () => {

//     try {
//     let data = await read('country-json/country-by-national-symbol.json');
//     let parsedData = JSON.parse(data);

//     parsedData.forEach(component => {

//         if(component.symbol !== null) {
//             component.new = 'This country has a national symbol'
//         } 
//         else {
//             component.new = 'This country does not have a symbol'
//         }
//     });

//     let newData = [...parsedData];
//     let sortData = newData.reverse();

//     console.log(sortData);
//     let outputString = JSON.stringify(sortData);
//     await write('data/data06.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//07 Math round population density

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-population-density.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.filter(item => item.density > 500);
    // let round = output.map(item => [item.country, Math.round(item.density)]);

    // let outputString = JSON.stringify(round.sort());
    // await write('data/data07.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//08 Sort by lowest to highest elevation

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-elevation.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.filter(item => item.elevation > 1500);

    // let sortData = output.sort(function (a, b) {

    //     return a.elevation - b.elevation;
    // });

    // let sortDataString = JSON.stringify(sortData);
    // await write('data/data08.json', sortDataString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//09 Region in the world

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-region-in-world.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.map(item => [item.country, item.location].join(", a country located in "));

    // let outputString = JSON.stringify(output.reverse());
    // await write('data/data09.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//10 Contries with Republic government

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-government-type.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.filter(d => d.country.toUpperCase()[0] === 'M' && d.government === "Republic");

    // const items = output.map(newObject => {
    //     const object = {
    //         value:
    //             `The country ${newObject.country} has ${newObject.government} government`
    //     }

    //     return object;
    // });

    // console.log(items);
    // let itemsString = JSON.stringify(items);
    // await write('data10.json', itemsString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//11 Contries without a barcode prefix

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-barcode-prefix.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.filter(item => item.barcode === null);

    // output.forEach(element => {

    //     if(element.barcode === null) {
    //        element.prefix = "no prefix"
    //     }
    // });

    // let newOutput = [...output];
    // let sortOutput = newOutput.sort();

    // console.log(sortOutput);
    // let outputString = JSON.stringify(output);
    // await write('data/data11.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//12 Currency code - €

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-currency-code.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.filter(d => d.currency_code === 'EUR');

    // let outputReplace = output.map(item => {

    //     if (item.currency_code === "EUR") {
    //         item.symbol = item.currency_code.replace("EUR", "€");
    //     }

    //     return item;
    // });

    // console.log(outputReplace);
    // let outputString = JSON.stringify(outputReplace);
    // await write('data/data12.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//13 Capital cities

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-capital-city.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.filter(item => item.country[2] === 'e');
    // let outputMap = output.map(item => [item.city, item.country].join(", is the capital city of ")).sort();

    // console.log(outputMap);
    // let outputString = JSON.stringify(outputMap);
    // await write('data/data13.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//14 Contries that celebrate independence day

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-independence-date.json');
    // let parsedData = JSON.parse(data);

    // parsedData.forEach(element => {
        
    //     if (element.independence !== null) {
    //         element.res = 'Celebrate independence'
    //     }
    //     else if (element.independence === null) {
    //         element.res = 'Does not have independence date'
    //     }
    // });

    // let newData = [...parsedData];
    // let sortData = newData.sort((a, b) => { return a.independence - b.independence });

    // console.log(sortData);
    // let outputString = JSON.stringify(sortData.reverse());
    // await write('data/data14.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//15 Landlocked contries

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-landlocked.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.filter(item => item.country.toUpperCase()[0] === 'B' || item.country.toUpperCase()[0] ==='M');

    // const items = output.map(element => {

    //     const object = {
    //         value: 
    //             `The country ${element.country} is enclosed or nearly enclosed by ${element.landlocked} land`
    //     }

    //     return object;
    // });

    // console.log(items)
    // let outputString = JSON.stringify(items);
    // await write('data/data15.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//16 National dish 

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-national-dish.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.filter(item => item.country.toUpperCase()[0] === 'A' && item.dish !== null);

    // console.log(output);
    // let outputString = JSON.stringify(output);
    // await write('data/data16.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//17 Population more than 100 million 

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-population.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.filter(item => item.population > 1000000);

    // let outputReplace = output.map(item => {
        
    //     if (item.population > 100000000) {
    //         item.value = "More than 100 million"
    //     }
    //     return item;
    // });

    // let newData = [...outputReplace];
    // let sortData = newData.sort((a, b) => { return b.population - a.population });

    // let filterData = sortData.filter(element => element.population > 100000000);

    // console.log(filterData);
    // let outputString = JSON.stringify(filterData);
    // await write('data/data17.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//18 Languages in contries

// const main = async () => {

//     try {
    // let data = await read('country-json/country-by-languages.json');
    // let parsedData = JSON.parse(data);

    // let output = parsedData.filter(item => item.country.toUpperCase()[0] === 'A');

    // let outputMap = output.map(item => `In ${item.country} the majority of the people speak these languages: ${item.languages}`);

    // console.log(outputMap)
    // let outputString = JSON.stringify(outputMap);
    // await write('data/data18.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

//19 Surface area

// const main = async () => {

//     try {
//     let data = await read('country-json/country-by-surface-area.json');
//     let parsedData = JSON.parse(data);

//     let output = parsedData.filter(item => item.area > 1);

//     let round = output.map(item => `Country: ${item.country}\nArea:${Math.round(item.area)}`);

//     console.log(round);
//     let outputString = JSON.stringify(round);
//     await write('data/data19.json', outputString);

// } catch (err) {
//     console.log('Error!'); 
// }
// };

// 20 Christianity

// const main = async () => {

//     try {
//     let data = await read('country-json/country-by-religion.json');
//     let parsedData = JSON.parse(data);

//     parsedData.forEach(function (item) {

//         if (item.religion === "Christianity") {
//             item.religion = item.religion.toUpperCase();
//         }
//         else {
//             item.religion = item.religion.toLowerCase();
//         }
//     })

//     let sortData = parsedData.sort((a, b) => { return a.religion - b.religion });

//     console.log(sortData)
//     let outputString = JSON.stringify(sortData);
//     await write('data/data20.json', outputString);
// } catch (err) {
//     console.log('Error!'); 
// }};
    
main();


