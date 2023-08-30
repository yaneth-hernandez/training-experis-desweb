/**
 * Ingresar una calificación y determinar si el alumno aprobó o reprobó la materia 
 * (3.5 es la nota mínima para pasar).

Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó 
la materia (3.5 es la nota mínima para pasar).

Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y
 determinar qué materias aprobó y cuáles reprobó.

Implementar funciones para realizar la misma funcionalidad del punto 3, pero 
calculando las notas de tres estudiantes
 */

const getGadreStudent = () => {
    const grade1 = document.getElementById('grade1')
    const grade2 = document.getElementById('grade2')
    const grade3 = document.getElementById('grade3')
    const btn = document.getElementById('btnSend')

    return [grade1,grade2,grade3,btn]
}

const getBtnElementAddEvent = () => {

}

const getNameStudent = () => {

}



class Student {

    constructor(record) {
        this.record = record
        this.name = document.getElementById('nameId').value
        // no debe ir en el cuerpo de la clase, debe ser agregado cuando 
        //la clase sea instanciada
    }

    getNameElement() {
        return this.name
    }
}


class Record {
    constructor(grade) {
        this.grade = grade
        this.gradeArray = []
    }

    isApproved = () => {
        if (Number(this.grade)) {
            return this.grade >= 3.5 ? true : false
        }
    }

    isApprovedByAverage = (gradeArray) => {
        let sumGrade = gradeArray.reduce((a, b) => a + b, 0);
        return sumGrade / gradeArray.length >= 3.5 ? 'Approved By Average' : 'Reproved By Average')
    }

    getDataGrade() {
        let arrayElem = []
        // const grade1 = document.getElementById('grade1')
        // const grade2 = document.getElementById('grade2')
        // const grade3 = document.getElementById('grade3')

        //const btn = document.getElementById('btnSend')

        btn.addEventListener('click', () => {
            let elemArray = [grade1.value, grade2.value, grade3.value]
            elemArray.forEach((elem) => {
                let numEle = parseInt(elem)
                arrayElem.push(numEle)
            })
            return this.isApprovedByAverage(arrayElem)
        })
        return arrayElem
    }
}



const studentName = new Student()
console.log(studentName.getNameElement())

//const record = new Record(new Student('Linda'))
const record = new Record(4)
console.log(record.isApproved())
console.log(record.getDataGrade())
//console.log(record.isApprovedByAverage())

