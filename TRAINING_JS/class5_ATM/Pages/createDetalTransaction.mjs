export const createDetailTrasaction = (transactions) => {
console.log(transactions.products)
    

    let detailTrans = "<tr><th>Date</th><th>Id</th><th>Description</th><th>Status</th><th>Origin</th><th>Application</th><th>Amount</th><th>Balance</th></tr>"
    let allTransactions = transactions.products
    for (let detail of allTransactions) {

        let row = "<tr> <td>"
        row += detail.date
        row += "</td>"

        row += "<td>"
        row += detail.id
        row += "</td>"

        row += "<td>"
        row += detail.transaction
        row += "</td>"

        row += "<td>"
        row += detail.state
        row += "</td>"

        row += "<td>"
        row += detail.origin
        row += "</td>"

        row += "<td>"
        row += detail.fundsApp
        row += "</td>"

        row += "<td>"
        row += detail.amount
        row += "</td>"

        row += "<td>"
        row += detail.balance
        row += "</td>"

        row += "</tr>"

        detailTrans += row
    }



    return detailTrans

}