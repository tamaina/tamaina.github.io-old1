const glob = require("glob")
const path = require("path")

const result = glob.sync("./pages/**/*.md")

console.log(result)

result.forEach((val,i,arr) => {
    console.log(path.parse(val))
})