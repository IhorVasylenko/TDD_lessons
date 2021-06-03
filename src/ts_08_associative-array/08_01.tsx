export type UserType = {
    name: string
    age: number
    address: {
        city: {
            title: string
        }
    }
}
let user: UserType = {
    name: 'Ihor',
    age: 33,
    address: {
        city: {
            title: 'Kiev'
        }
    }
}
let a = user.address.city.title
let b = user['address']['city']['title']
console.log(a === b) //true



let users = ['Ihor','Iuliia','Gleb','Maryna']
console.log(users[0]) //'Ihor'

let usersObj = {
    '0': 'Ihor',
    '1': 'Iuliia',
    '2': 'Gleb',
    '3': 'Maryna'
}
console.log(usersObj['0']) //'Ihor'
console.log(usersObj[0]) //'Ihor'

usersObj['0'] = 'SuperIhor'
console.log(usersObj) //{ '0':'Super Ihor', '1':'Iuliia', '2':'Gleb', '3':'Maryna' }

//usersObj['new table'] = 'brown'
//console.log(usersObj) //{ '0':'Super Ihor', '1':'Iuliia', '2':'Gleb', '3':'Maryna', 'new table':'brown' }
//console.log(users.new table) //--> невозможно
//console.log(users.['new table']) // 'brown'



let newUsers = {
    '0': 'Ihor',
    '1': 'Iuliia',
    '2': 'Gleb',
    '3': 'Maryna'
}
Object.keys(newUsers) // ['0', '1', '2', '3']
Object.values(newUsers) // ['Ihor', 'Iuliia', 'Gleb', 'Maryna']
