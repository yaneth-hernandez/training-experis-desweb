export class Atm {
    constructor() {
        this.balance = 0
    }

    validateNumber(amount) {

        if (amount == null || typeof amount !== 'number') {
            return 0
        }
        return amount
    }

    validateBalance(amount) {

        return this.balance < this.validateNumber(amount) || this.balance <= 0 ? 0 : this.validateNumber(amount)
    }

    sendMessage(amount) {
        return this.validateNumber(amount) && this.validateBalance(amount) > 0 ? 'Successful' : 'Failed'
    }

    add(data, amount, date, id, product, fundsApp) {
        data.push({
            id: id,
            date: date,
            transaction: 'Add Amount',
            state: this.sendMessage(amount),
            amount: this.validateNumber(amount),
            balance: this.balance + amount,
            origin:product,
            fundsApp:fundsApp
        })

        localStorage.setItem('Transaction', JSON.stringify(data))
        return `Current Balance: ${this.getBalance()}`

    }

    remove(data, amount, date, id, product, fundsApp) {

        data.push({
            id: id,
            date: date,
            transaction: 'Remove Amount',
            state: this.sendMessage(amount),
            amount: amount,
            balance: this.balance - this.validateBalance(amount),
            origin:product,
            fundsApp:fundsApp
        })

        
        localStorage.setItem('Transaction', JSON.stringify(data))

        
        return `Current Balance: ${this.getBalance()}`

    }

    getTransactions() {
        return JSON.parse(localStorage.getItem('Transaction'))
    }

    getBalance() {

        let transactionHistories = JSON.parse(localStorage.getItem('Transaction'))
        let totalBalance = transactionHistories.map(elem => elem.balance)
        this.balance = totalBalance[totalBalance.length - 1]
        return this.balance
    }
}






