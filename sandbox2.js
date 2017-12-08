const fontawesome = require("@fortawesome/fontawesome")
const faSolid = require("@fortawesome/fontawesome-free-solid")
const faBrands = require("@fortawesome/fontawesome-free-brands")
fontawesome.library.add(faSolid, faBrands)
const icon = fontawesome.icon({prefix: 'fab', iconName: 'fort-awesome'})

console.log(icon.html)