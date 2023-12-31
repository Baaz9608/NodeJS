const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'Crud');
const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(filePath, 'This a company ')
// fs.readFile(filePath,'utf-8', (_, item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath, 'and this is the apple.txt file', (err)=>{
//     if(!err) console.log('file is undated')
// })

fs.unlinkSync(`${dirPath}/fruit.txt`);