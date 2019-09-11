// nodemon server
// This demo shows how to decode a URL

/*
 * Tests:
 * http://localhost:3000/
 * http://localhost:3000/data
 * http://localhost:3000/login.html
 * http://localhost:3000/login.html?username=FooBar
 */

// require Node modules
const http = require('http');
const url = require('url');
const fs = require('fs');
const connect=require('connect');

const publicPath = './public/';
const dataPath = './data/';
const host = '127.0.0.1';
const port = 3000;
var app=connect();

app.use((request,response)=>{
    let clientURL= request.url;
    let parseURL= url.parse(clientURL);
    let href=parseURL.href;

    if(href === '/'){
        response.end(fs.readFileSync(publicPath + 'index.html'));
        
    }
    else if (href ==='/leagues'){
        response.end(fs.readFileSync(dataPath+'leagues.json'));
    }
    else if (href === '/teams'){
        response.end(fs.readFileSync(dataPath+'teams.json'));
    }

    else{
        response.end("404: Error")
    }
});

http.createServer(app).listen(port,host);
console.log(`http://${host}:${port}.`)