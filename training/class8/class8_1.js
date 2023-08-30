/**
 * Formatea los datos de la lista Imprime la lista en la consola, el resultado final debe ser el siguiente:

Valor: 0.25

const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];
El resultado esperado es el siguiente:

Grupo 1:
    Pablo
    Maria
    Pedro
Grupo 2:
    Diana
    Juan
    Federico
Grupo 3:
    Roberto
    Daniel
    Sandra
 */
const listFormat = (array) => {
    array.forEach((element, index) => {
        console.log(`Grupo${index + 1}:`)
        element.forEach((word) => {
            console.log(`    ${word}`)
        })
    })
}

const listFormater = (array) => {
 for(let i=0; i<=array.length-1; i++){
    console.log('Group'+(i+1)+':')

    for(let j=0; j<=array[i].length-1; j++){
        console.log('    '+array[i][j])
    }
    
 }
}

const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];

listFormat(mat)

listFormater(mat)


