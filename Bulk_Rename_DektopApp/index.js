const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });
const replaceThis = prompt("Enter value-name to be replaced?: ")
const replaceWith = prompt("Enter value to name the files.: ")
const preview = true

try {
    fs.readdir("data", (err, data) => {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newFile = "data/" + item.replaceAll(replaceThis, replaceWith)
                // if (!preview) {
            fs.rename("data/" + item, newFile, () => {
                    console.log("Rename Successful")
                })
                // } else {
                //     console.log("data/" + item + " will be replaced to " + newFile)
                // }

        }
    })
} catch (err) {
    console.error(err);
}