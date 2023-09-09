export const createHeaderHtml = (transactions) => {
   let accountData = transactions.account
    let userData = transactions.user

    let header = `<header class="header-content">
    <div>
    <h5>Name: ${userData.name}</h5>
    <h5>Id: ${userData.id}</h5>
    <h5>email:${userData.email}</h5>
    </div>

    <div>
    <h5>Account: ${accountData.typeAccount}</h5>
    <h5>Id: ${accountData.idAccount}</h5>
    <h5>email:${accountData.userName}</h5>
    </div>
    </header>`

    return header
    
}