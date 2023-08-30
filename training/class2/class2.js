let array1 = ['Gato','Perro','Loro']
let array2 = ['Elefante','Jirafa','Tigre']
let cadena = "INTERNET ESTÁ MUY LENTO"

console.group('1.- Concatenar dos cadenas de texto')

let newArray = array1.concat(array2)
console.log('Solución1',newArray.join())

let newArray2 = [...array1,...array2]
console.log('Solución2',newArray2.join())

console.groupEnd('...')

console.group('2.- Reemplazar todas las ocurrencias de un caracter en una cadena')

let nuevaCadena = cadena.replaceAll(" ", "😡");
console.log('Solución1',nuevaCadena)

let removeSpace= cadena.split(" ").join("😤") 
console.log('Solución2',removeSpace)

let res = cadena.split('').map((elem)=>{
    return elem.replace(' ','😓')
})
console.log('Solucion3',res.join(''))

let otraCadena=''

for(let i=0; i<cadena.length; i++){
   if(cadena[i].includes(' ')){
    cadena[i].replace(' ', '😤')
    otraCadena+=cadena[i]
   } 
}
console.log('Aqui',otraCadena)
console.groupEnd('________')

console.group('3.- Contar el número de caracteres en una cadena')

console.log('Solución1',cadena.length)

let counterFor = 0
for(let i = 0; i<cadena.length; i++){
    counterFor++
}
console.log('Solución2',counterFor)

let iterator = 0
while (iterator < cadena.length) {
    iterator++;
  }
console.log('Solución3',iterator)

console.groupEnd('______')


console.group("4.- Converitir una cadena a minusculas")
let cadenaMinuscula =''
let lowCadena = cadena.split('').map((elem, index) =>{
    return elem.codePointAt(cadena[index])+32 
}).forEach((char)=>{
    
    //if((char >= 97 && char <= 122) || char === 64 ){
        cadenaMinuscula += String.fromCharCode(char)
    //}
})
console.log('Solución1: ',cadenaMinuscula.split("@").join(" "))

let = characterString = ''
let i = 0
while(i < cadena.length){
    const char = cadena[i]

    if(char >= 'A' && char <= 'Z')
        characterString += String.fromCharCode(char.charCodeAt(0) + 32)
     else
        characterString += char
    i++
}

console.log('Solución2:',characterString)

console.groupEnd('______')


console.group('Reverse string')
console.log('Dada la cadena',cadena)

const reverseString = cadena.split('').reverse().join('');
console.log('Solución 1 ',reverseString)

let stringArray = cadena.split('')
//let stringArray = cadena.split(' ') para solo cambiar las palabras de lugar y no girar las letras
let stringRev= ''
//console.log('uno',stringArray)
for(let i = stringArray.length-1; i>=0; i--){
    stringRev += stringArray[i]
}

console.log('Solución 2 ',stringRev)

let rev = ''
for(const str of cadena.split('').reverse()){
    rev+=str
}
console.log('Solución 3 ',rev)
console.groupEnd()

const bingo=(a)=>{
    return [2,9,14,7,15].every(x=>a.includes(x))?true:false
}

console.log(bingo('BINGO'))