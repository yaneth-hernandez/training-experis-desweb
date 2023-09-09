const convertirMinuscula = (char) =>{
let item = ''

for(let i = 0; i<char.length; i++){
    const oneString = char[i]
    
    if(oneString >= 'A' && oneString <= 'Z')
    item += String.fromCharCode(oneString.charCodeAt(0)+32)
    else
    item += oneString
}

return item
}

console.log(convertirMinuscula("INTERNET ESTÁ MUY LENTO"))
