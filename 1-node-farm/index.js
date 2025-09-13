const fs = require('fs');

//Hello WORLD
const hello = 'Hello World!';
console.log(hello);

//READING AND WRITING FILES
//reading
const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
console.log(textIn);

//writing
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./starter/txt/output.txt', textOut);
console.log('File written!');




