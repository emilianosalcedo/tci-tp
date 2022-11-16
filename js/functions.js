var usuario = nombreCompleto('Cosme', '', 'Fulanito')

var users = []

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        console.log(json)
    })

var user = {
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
}

for (var i = 0; i < users.length; i++) {
    users[i] = {...users[i], ...user}
}
