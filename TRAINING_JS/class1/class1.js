/**
 * 1. Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia (3.5 es la nota mínima para pasar).
 */
/**
 * @param {Number} grade 
 * @returns message
 */
const isApproved = (grade)=>{
    if(Number(grade)){
        return grade >= 3.5 ? true : false
    }
}

//console.log(isApproved(2))

/**
 * 2. Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar).
 * 
 */

/**
 * 
 * @param {Array} gradeArray 
 * @returns message
 */
const isApprovedByAverage = (gradeArray)=>{
    
    let sumGrade = gradeArray.reduce((a, b) => a + b, 0);
    return sumGrade/gradeArray.length >= 3.5 ? 'Approved By Average' : 'Reproved'
}

console.log(isApprovedByAverage([4,5,5]))

/*
3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.
*/
const record = [{name:'Yesika',subject:'Math', grade:[3,4,5]},{name:'Jose', subject:'History', grade:[3.5,5,4]},{name:'Leo',subject:'Logic', grade:[3,3,4]}]

/**
 * 
 * @param {String} student 
 * @param {Array} subjects 
 */
const isApprovedRecord = (student, subjects) => {
    let grade = []
     subjects.forEach(element => {
        if(element.name.includes(student)){
            grade.push(element.grade)
        }
    })

    return grade
}

//isApprovedRecord('Yesika',record)

