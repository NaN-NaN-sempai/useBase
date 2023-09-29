import useBase from "./index.js";



let valueInBinary = useBase("MYBASE").encode(42); // "101010"

let valueInOctal = useBase.octal.encode(valueInBinary.raw); // 52

console.log(valueInBinary);