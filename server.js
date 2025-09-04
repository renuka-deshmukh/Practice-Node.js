const http = require('http')
const settings = require('./Config/settings')
const os = require('os')


const PORT = settings.port || 10500

const app = http.createServer((req, res)=>{
    // res.writeHead(200, {'content-Type' : 'text/plain'})
    res.end('Hello World')
});


console.log(os.platform())
console.log(os.homedir())

const path = require('path')
const fs = require('fs')


 app.listen(PORT, ()=>{
     console.log("Server Started");
     console.log(`http://localhost:5000`);
})