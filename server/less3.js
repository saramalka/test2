const dateFns=require("date-fns")
console.log(dateFns.format(new Date(),"yyyy/MM/dd hh:mm:ss"))

const id=require("uuid")

const {names}=require("./array")
let count=0;
names.forEach(element => {
    console.log(element)
    console.log(id.uuid)
    console.log(dateFns.format(new Date(),"yyyy/MM/dd hh:mm:ss"))
count++;
});

console.log("Count: "+count)