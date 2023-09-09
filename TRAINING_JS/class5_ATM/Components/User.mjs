export class User {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }
    showDataUser() {
        // return `Id: ${this.id}\nName: ${this.name}\nEmail: ${this.email}`
        return `Id: ${this.id}</br>Name: ${this.name}</br>Email: ${this.email}`
    }
}
