import { Account_A } from "../Components/Account_A.mjs"
import { getCurrentDate } from "../Helpers/getCurrentDate.mjs"

export let data =
    [{
        id: Date.now(),
        date: getCurrentDate(),
        transaction: 'Initial balance',
        state: '_________',
        amount: 0,
        balance: 0,
        origin: "Cash",
        fundsApp: "Account_A"
    }]


localStorage.setItem('TransCTA01', JSON.stringify(data))

