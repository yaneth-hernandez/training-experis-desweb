/* cuenta Automatico
   - [ok] Agregar Saldo: NO Saldo Negativo 
   - [ok] Remover Saldo: NO Remover saldo no disponible
   - [ok] Mostrar Saldo
   - [ok] Mostrar Operaciones

   - [ok] Agrege el nombre del titular de la cuenta
   - Historial registre intentos fallidos
   - Simule usuario y contraseña
   - Tranferencias entre cuentas
   - Pagos de Servicios Publicos
   - (Opcional): Agregar una tercera entidad
*/

let transactionData = localStorage.setItem(
    `Transaction${Date.now()}`,
    JSON.stringify
        ([{
            id: Date.now(),
            transaction: 'Initial balance',
            state: '_________',
            amount: 0,
            balance: this.balance - 0
        }]
            ))


class User {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }
    // showDataUser() {
    //     console.log(`UserId: ${this.id}`, `UserName: ${this.name}`, `UserEmail: ${this.email}`) 
    //     //return `User:${this.name}`
    // }
}

// class Account extends User {

//     constructor(id, name, email,userName, password) {
//         super(id, name, email) 
//         this.userName = userName
//         this.password = password

//     }
//     showDataAccount() {
//         console.log( `Account:${this.id}`,`Account:${this.name}`, `Account:${this.email}`,`Account:${this.userName}`,`Account:${this.password}`)
//     }
// }

// const bancoA = new Account(3456, 'Ana', 'ana@correo.com','ana543','******')
// bancoA.showDataAccount()

class Account {

    constructor(user, userName, password) {
        this.userName = userName
        this.password = password
        this.user = user

    }
    showDataAccount() {
        console.log(`Account:${this.userName}`, `Account:${this.password}`)
        console.log(`User:${this.user.name}`)
    }
}

class Atm {
    constructor() {
        this.balance = 0
        this.transactions = []

    }

initialBalance(){
    // localStorage.setItem(
    //     `Transaction${Date.now()}`,
    //     JSON.stringify
    //         ([{
    //             id: Date.now(),
    //             transaction: 'Initial balance',
    //             state: '_________',
    //             amount: 0,
    //             balance: this.balance - 0
    //         }]
    //             ))

    return transactionData

}

    validateNumber(amount) {

        if (amount == null || typeof amount !== 'number') {
            return 0
        }

        return amount
    }

    sendmessage(amount) {
        return this.validateNumber(amount) ? 'successful' : 'failed'
    }

    validateBalance(amount) {
        return this.validateNumber(amount) > 0 ? amount : 'Without balance'
    }


    add(amount) {
        let balance = this.totalBalance()
        let amountVal = this.validateNumber(amount)
        let message = this.sendmessage(amount)
        let storedTransactions = []

        storedTransactions.push(JSON.parse(localStorage.getItem('Transaction0')))

        storedTransactions.forEach((elem, index) => {
            localStorage.setItem(`Transaction${Date.now()}`, JSON.stringify
                ({
                    id: Date.now(),
                    transaction: 'Bank deposit',
                    state: message,
                    amount: amountVal,
                    balance: balance - amountVal
                }))
            storedTransactions.push(JSON.parse(localStorage.getItem(`Transaction${Date.now}`)))
        })

        return storedTransactions

    }

    // remove(amount) {
    //     let balance = this.totalBalance()
    //     let storedTransactions = this.getTransactions()
    //     //console.log(storedTransactions)

    //     if (!this.validateBalance(amount)) {
    //         return this.transactions.push({ id: 0, transaction: 'Bank withdrawal', state: 'failed', amount: 0, balance: balance - 0 }) && balance
    //     }

    //     // if(localStorage.length > 0){
    //     storedTransactions.forEach((elem, index) => {
    //         localStorage.setItem(`Transaction${index}`, JSON.stringify({ id: index, transaction: 'Bank withdrawal', state: 'successful', amount: -amount, balance: balance - amount }))
    //     })
    //     //}
    //     //localStorage.setItem(`Bank withdrawal${1}`, JSON.stringify({ transaction: 'Bank withdrawal', state: 'successful', amount: -amount, balance: balance - amount }))

    //     return balance
    // }

    getTransactions() {
        //console.log(JSON.parse(localStorage.getItem()))
    }

    totalBalance() {
        let balance = this.balance




        return balance
    }

}

class CurrentDate {

    //constructor() {
    // today = new Date()
    // day = today.getDate()
    // month = today.getMonth() + 1
    // year = today.getFullYear()

    //}

    getCurrentDate() {
        // return `${this.day}/${this.month}/${this.year}`

        let currentDate = new Date()
        //console.log(currentDate.toLocaleDateString('en-US'))
    }

}




const atmBancolombia = new Atm()
atmBancolombia.initialBalance()
// const atmBancoBogota = new Atm()
const atmBancoDavivienda = new Atm()
//console.log(atmBancolombia.add(19))

//console.log(atmBancoDavivienda.add(11))
//console.log(atmBancolombia.remove(3))
//console.log(atmBancolombia.getTransactions())
//console.log(atmBancolombia.totalBalance())


//const bancoA = new Account(new User('', 'yaneth', ''), 'ana543', '******')
//bancoA.showDataAccount()



function see() {
    let currentDate = new Date()
    //console.log(currentDate.toLocaleDateString('en-US'))

    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()



    //console.log(`${day}/${month}/${year}`)

}



//console.log(Math.floor(Math. random() * 100))

// for (let i = 0; i < localStorage.length; i++) {
//     console.log(localStorage.getItem(localStorage.key(i)));
//   }

//console.log(localStorage.length)
//let str = "I love JavaScript";

//let result = str.match(/JavaScript/g);

//console.log( result[0] ); // JavaScript
//console.log( result.length ); // 1
