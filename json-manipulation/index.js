const { match } = require("assert")
const fs = require("fs")
let myJson = fs.readFileSync("./data.json")
let myObj = JSON.parse(myJson)
// console.log(myObj)

function items(spec) {
    let data = myObj.filter((unit) => unit.placement.name.match(spec))    
    console.log({data})
}
// items("Meeting Room")

function devices(spec) {
    let data = myObj.filter((unit) => unit.type.match(spec)).map((unit2) => unit2.name)
    console.log(data)
}
// devices("electronic")

function furniture(spec) {
    let data = myObj.filter((unit) => unit.type.match(spec)).map((unit2) => unit2.name)
    console.log({data})
}
// furniture("furniture")

function purchased(spec) {
    spec = new Date(spec).toLocaleDateString()
    let data = myObj.filter((unit) => new Date(unit.purchased_at * 1000).toLocaleDateString() === spec)
    console.log({data})
}
// purchased("1/16/2020")

function color(spec) {
    let data = myObj.filter((unit) => unit.tags.includes(spec))
    console.log({data})
}
color("brown")

