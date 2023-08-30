/**
 * ¿Va a sobrevivir?

Un héroe se dirige al castillo para completar su misión. 
Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. 
cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

Responda a la pregunta y devuelva true si es así, de lo contrario false :)
 * 
 */
const isAlive = (bulets,dragons)=>{

    if(typeof bulets !== 'number' || typeof  dragons !== 'number'){
        throw 'The argument must be a number'
    }

    return dragons >= 0 && bulets>=(dragons*2) ? true : false
}

console.log(isAlive(1,1))

