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
    const grade1 = document.getElementById('grade1').value
    const grade2 = document.getElementById('grade2').value
    const grade3 = document.getElementById('grade3').value

    return [grade1, grade2, grade3]
}

const getNameStudent = () => {
    document.getElementById('nameId')
}

const getDataForm2 = () => {
    const html = document.getElementById('subejct0').textContent
    const css = document.getElementById('subejct1').textContent
    const js = document.getElementById('subejct2').textContent
    const name = document.getElementById('nameId').value
    const grade1 = document.getElementById('mathGrade1').value
    const grade2 = document.getElementById('mathGrade2').value
    const grade3 = document.getElementById('mathGrade3').value
    const grade4 = document.getElementById('engGrade1').value
    const grade5 = document.getElementById('engGrade2').value
    const grade6 = document.getElementById('engGrade3').value
    const grade7 = document.getElementById('logGrade1').value
    const grade8 = document.getElementById('logGrade2').value
    const grade9 = document.getElementById('logGrade3').value

    //return [grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8, grade9]
    return [ 
        name, 
        {
        subject1: html,
        grade1: 
        [grade1, grade2, grade3]
        }, 
        {
        subject2:css, 
        grade2: 
        [grade4, grade5, grade6]
        },
        {
        subject3: js, 
        grade3: 
        [grade7, grade8, grade9]}
    ]
}
class Student {
    constructor(record, student) {
        this.record = record
        this.student = student
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
        return sumGrade / gradeArray.length >= 3.5 ? 'Approved By Average ✔️​​' : 'Reproved By Average ​❌​'
    }
}



const studentName = new Student()
const record = new Record(4)
console.log('Excercise 1', record.isApproved())

const getBtnElementAddEvent = () => {
    let form = document.getElementById('form1')
    const btn = document.getElementById('btnSend')
    let message = document.getElementById('message1')

    btn.addEventListener('click', () => {
        let arrayElem = []
        let elemArray = getGadreStudent()
        elemArray.forEach((elem) => {
            console.log(elem)
            let numEle = parseInt(elem)
            arrayElem.push(numEle)
        })
        message.textContent = record.isApprovedByAverage(arrayElem)
        form.reset()

    })
}



const getBtn2ElementAddEvent = () => {
    let form = getDataForm2()
    const btn = document.getElementById('btnSend_1')
    let message = document.getElementById('message2')


    const subejct0 = document.getElementById('subejct0').textContent
    const subejct1 = document.getElementById('subejct1').textContent
    const subejct2 = document.getElementById('subejct2').textContent
    const name = document.getElementById('nameId')
    const record1 = document.getElementById('mathGrade1')
    const record2 = document.getElementById('mathGrade2')
    const record3 = document.getElementById('mathGrade3')
    const result1 = document.querySelector("#TotalGrade0")
    const record4 = document.getElementById('engGrade1')
    const record5 = document.getElementById('engGrade2')
    const record6 = document.getElementById('engGrade3')
    const result2 = document.querySelector("#TotalGrade1")
    const record7 = document.getElementById('logGrade1')
    const record8 = document.getElementById('logGrade2')
    const record9 = document.getElementById('logGrade3')
    const result3 = document.querySelector("#TotalGrade2")


    btn.addEventListener('click', () => {
       //console.log(form)
        
        let sendRecord = 
        [ 
            name.value, 
            {
            subject: subejct0,
            result : 
            [parseFloat(record1.value|0), parseFloat(record2.value|0), parseFloat(record3.value|0)].reduce((a, b) => a + b, 0)/
            [record1.value, record2.value, record3.value].length
            
            }, 
            {
            subject:subejct1, 
            result : 
            [parseInt(record4.value|0), parseInt(record5.value|0), parseInt(record6.value|0)].reduce((a, b) => a + b, 0)/
            [record4.value, record5.value, record6.value].length
            
            },
            {
            subject: subejct2, 
            result : 
            [parseInt(record7.value|0), parseInt(record8.value|0), parseInt(record9.value|0)].reduce((a, b) => a + b, 0)/
            [record7.value, record8.value, record9.value].length
            
        }
        ]

        let showName = document.getElementById('studentName')
        let message1 = document.getElementById('icon1')
        let message2 = document.getElementById('icon2')
        let message3 = document.getElementById('icon3')
        sendRecord.forEach((elem)=>{
            console.log(elem)

            if(typeof elem === 'string'){
                showName.textContent = elem
            }

            if(elem.subject === subejct0){
                
                result1.value = elem.result.toFixed(1)

                result1.value>=3.5? message1.placeholder = '✔️' : message1.placeholder = '​❌' 
                
            }

            if(elem.subject === subejct1){
                
                result2.value = elem.result.toFixed(1)

                result2.value>=3.5? message2.placeholder = '✔️' : message2.placeholder = '​❌' 
            }

            if(elem.subject === subejct2){
                
                result3.value = elem.result.toFixed(1)

                result3.value>=3.5? message3.placeholder = '✔️' : message3.placeholder = '​❌' 
            }

            

        })
        
    })
}



getBtnElementAddEvent()
getBtn2ElementAddEvent()


//9+8+7-6