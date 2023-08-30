//calcular el factorial de cualquier numero
//4! = 1 \cdot 2 \cdot 3 \cdot 4 =24
/**
 * 
 * @param {Number} num 
 * @returns Number
 */
const factorialNumber =(num) =>{
    if(isNaN(num)) throw 'The argument must be a number'
	
    let pivot = 1; 
	for (i=1; i<=num; i++) {
		pivot = pivot * i; 
	}
	return pivot 
}

try{
    console.log('With loop',factorialNumber(7))
}catch(error){
    console.error(error)
}


/**
 * 
 * @param {Number} num 
 * @returns Number
 */

function recursiveFactorialNumber (number) { 
    if(isNaN(number)) throw 'The argument must be a number'
	
    if (number == 0){ 
		return 1; 
	}
	return number * recursiveFactorialNumber (number-1); 
}


try{
    console.log('Daniela',recursiveFactorialNumber(8))
}catch(error){
    console.error(error)
}

