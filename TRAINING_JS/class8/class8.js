/**
 * Productos Baratos

Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos)
 y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

    let prods = [
        { nombre: "Arroz", precio: 5 },
        { nombre: "Pan", precio: 3 },
        { nombre: "Tomate", precio: 8 },
        { nombre: "Leche", precio: 15 }
    ];
Nota: No olvide usar console.log() para mostrar los resultados retornados por la función productosB

Entrada:    productosBaratos( prods );
Salida:     [ "Arroz", "Tomate" ]
 * 
 * 
 */

/**
 * 
 * @param {Array} objectsArray 
 */

const cheapProducts = (objectsArray)=>{
    let newProducts = objectsArray.filter(elem => elem.precio >= 5 && elem.precio <= 10)
    return newProducts.flatMap(item=>item.nombre)
}

const cheapProducts2 = (objectsArray)=>{

    let array = []
    for (let newProducts of objectsArray) {
        if(newProducts.precio >= 5 && newProducts.precio<= 10){
            array.push(newProducts.nombre)
        }
    }
    return array
}


const cheapProducts3 = (objectsArray)=>{
    let newProducts = objectsArray.filter(elem => elem.precio >= 5 && elem.precio <= 10)//.map(item=> item.name)
    return newProducts.map(item => item.nombre)
}

let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
];

console.log(cheapProducts(prods))

console.log(cheapProducts2(prods))

console.log(cheapProducts3(prods))
