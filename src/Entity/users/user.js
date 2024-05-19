export default class User {
    constructor(username, password) {
        this.username = username,
            this.password = password
    }

    get Username() {
        return this.username
    }

    get Password() {
        return this.password
    }

    set Username(newUsername) {
        this.username = newUsername
    }

    set Password(newPassword) {
        this.password = newPassword
    }

}