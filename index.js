const http = require('http')
const data = require('./data')
http.createServer((_, res)=>{
res.writeHead(200, {'content-type': 'application\json'})
res.write(JSON.stringify(data));
res.end();
}).listen(3000)

const fs = require('fs')

const input = process.argv;

// fs.writeFileSync(input[2], input[3]);
if(input[2]=='add'){
    fs.writeFileSync(input[3], input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log('Invalid input')
}