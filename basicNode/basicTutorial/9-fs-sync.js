const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt','utf-8')
// const second = readFileSync('./content/second.txt','utf-8')

// console.log(first)
// // console.log("\n")
// console.log(second)

writeFileSync('./content/result-sync.txt',
    'This is the result-sync file.txt'
)
