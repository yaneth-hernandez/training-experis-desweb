import { Atm } from "./Components/Atm.mjs"
import { data } from "./Data/data.mjs"
import { Account_A } from "./Components/Account_A.mjs"
import { User } from "./Components/User.mjs"
import {getCurrentDate} from "./Helpers/getCurrentDate.mjs"
import { getId } from "./Helpers/getId.mjs"
import { createHeaderHtml } from "./Pages/createHeaderHtml.mjs"
import { createDetailTrasaction } from "./Pages/createDetalTransaction.mjs"
import { BanckRecord } from "./Components/BanckRecord.mjs"
import { AccountCta02 } from "./Components/AccountCta02.mjs"


const cta1 = new AccountCta02()
console.log(cta1.remove(data,1,getCurrentDate(), getId(),'ATM','Account_B'))


const atmBancolombia = new Atm()

atmBancolombia.add(data,20,getCurrentDate(), getId(),'ATM','Account_A')

atmBancolombia.add(data,20,getCurrentDate(), getId(),'Account_B','Account_A')
atmBancolombia.add(data,10,getCurrentDate(), getId(),'ATM','Account_A')

atmBancolombia.remove(data,30,getCurrentDate(), getId(),'ATM','Account_A')

atmBancolombia.remove(data,40,getCurrentDate(), getId(),'ATM','Account_A')

atmBancolombia.remove(data,10,getCurrentDate(), getId(),'Account_B','Account_A')
atmBancolombia.remove(data,15,getCurrentDate(), getId(),'ATM','Account_A')

atmBancolombia.add(data,200,getCurrentDate(), getId(),'ATM','Account_A')

const record = new BanckRecord(
    new Account_A(' yan543','', '987654321','CTA01'), 
    new Atm().getTransactions(),
    new User('1234','yaneth','yaneth@correo.com')
    )

let main = document.getElementById('header')
main.innerHTML = createHeaderHtml(record)

let table = document.getElementById('table')
table.innerHTML += createDetailTrasaction(record)


