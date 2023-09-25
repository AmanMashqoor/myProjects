const http = require('http');
const ps = require('prompt-sync');
const prompt = ps();

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage.');
    }

    if(req.url === '/about'){
        res.end('This is our short history.');
    }

    if(req.url === '/contact'){
        res.end(`
        <h1>Oops!</h1>
        <p>We cannot find the page you are looking for.</p>
        <a href='/'>Go to Home</a>
        `);
    }

    if(req.url === '/ask'){
        let a = prompt("Enter a number: ");
        res.end(`<h1>Your entered number is: ${a}</h1>`);
    }
    
})
server.listen(5000)
console.log(`Listening to port at: http://localhost:${5000}`)
