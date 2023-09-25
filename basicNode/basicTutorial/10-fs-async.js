const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err) {
            console.log(err)
            return
        }
        console.log(result)
        writeFile('./content/result-async.txt',
       'This is the result-async file.txt',
       (err,result) =>{
        if(err) {
            console.log(err)
            return
        }
        console.log(result)
       }
)
    })
    
})
