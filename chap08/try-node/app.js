const fs = require("fs");

fs.writeFile('test.txt', "hello wordl 1", () => {
    fs.readFile('test.txt', "utf-8", (err, msg)=> {
        console.log(msg);
    })
})