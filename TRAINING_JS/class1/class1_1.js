const dialogue = () =>{
   return `
    <article>
        <h2>Score</h2>
        <form class="" id="form">
            <label>Name: <input id="name" type="text" value="" required/></labe>
            
            <label id="subjectA">Math:<input id="gradeA1" type="text" value="" required/>
            <input id="gradeA2" type="text" value="" required/>
            <input id="gradeA3" type="text" value="" required/>
            </labe>
            <label id="totalSubjectA">Total:
             <input id="totalGradeA" type="text" value="" readonly/>
             </labe>
            <label id="subjectB">English:<input id="gradeB1" type="text" value="" required/>
            <input id="gradeB2" type="text" value="" required/>
            <input id="gradeB3" type="text" value="" required/>
            </labe>
            <label>Total: 
            <input id="totalGradeB" type="text" value="" readonly/>
            
            </labe>
            <label id="subjectC">History:<input id="gradeC1" type="text" value="" required/>
            <input id="gradeC2" type="text" value="" required/>
            <input id="gradeC3" type="text" value="" required/>
            </labe>
            <label>Total: 
            <input id="totalGradeC" type="text" value="" required readonly/>
            </labe>
        </form>
        <button id="btn">Send</button>

        <p></p>
    </article>`
}

let popUp = dialogue()
const body = document.querySelector("body")
body.innerHTML += popUp

const getElements = ()=>{
    const name = document.getElementById('name').value

    const subjectOne = document.getElementById('subjectA').textContent
    const gradeOneItemOne = document.getElementById('gradeA1').value
    const gradeTwoItemOne = document.getElementById('gradeA2').value
    const gradeThreeItemOne = document.getElementById('gradeA3').value
    //const totalGradeA = document.getElementById('totalGradeA').value

    const subjectTwo = document.getElementById('subjectB').textContent
    const gradeOneItemTwo = document.getElementById('gradeB1').value
    const gradeTwoItemTwo = document.getElementById('gradeB2').value
    const gradeThreeItemTwo = document.getElementById('gradeB3').value
    //const totalGradeB = document.getElementById('totalGradeB').value

    const subjectThree = document.getElementById('subjectC').textContent
    const gradeOneItemThree = document.getElementById('gradeC1').value
    const gradeTwoItemThree = document.getElementById('gradeC2').value
    const gradeThreeItemThree = document.getElementById('gradeC3').value
    //const totalGradeC = document.getElementById('totalGradeC').value
       
 
    return [name,
        {subject:subjectOne, grade:[gradeOneItemOne,gradeTwoItemOne,gradeThreeItemOne]},
        {subject:subjectTwo, grade:[gradeOneItemTwo,gradeTwoItemTwo,gradeThreeItemTwo]},
        {subject:subjectThree, grade:[gradeOneItemThree,gradeTwoItemThree,gradeThreeItemThree]},
    ]
}

const getGrade = () => {
    const studentData = getElements()

    // const studentResult = studentData.map((element)=>{
    //     console.log(element.subject, element.grade) 
    // })

    return studentData
}
