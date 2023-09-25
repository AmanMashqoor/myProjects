console.log("First task.");
let a;
console.time();
setTimeout(()=>{
    console.log("Second task.");
},3000)
console.timeEnd();
console.log("Third task.");