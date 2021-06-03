export const usersObj = {
    '0': 'Ihor',
    '1': 'Iuliia',
    '2': 'Gleb',
    '3': 'Maryna'
}

export type UsersType = {
    [key: string]: {id: number, name:string}
}
export const users: UsersType = {
    '101': {id: 101, name: 'Ihor'},
    '3232312': {id: 3232312, name: 'Iuliia'},
    '1212': {id: 1212, name: 'Gleb'},
    '1': {id: 1, name: 'Maryna'}
}

//user[1212] // {id: 1212, name: 'Gleb'} --> достаем из ассоциативного обьекта
             // значение по ключу
let newUser = {id: 100500, name: 'Monro'}
users[newUser.id.toString()] = newUser // наш элемент добавился в массив
delete users[newUser.id] // удаляем эллементиз массива
users[newUser.id].name = 'Viktor'

export const usersArray = [
    {id: 101, name: 'Ihor'},
    {id: 3232312, name: 'Iuliia'},
    {id: 1212, name: 'Gleb'},
    {id: 1, name: 'Maryna'}
]

