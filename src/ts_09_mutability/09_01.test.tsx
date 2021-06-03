import {increaseAge, UserType} from "./09_01";

let testsUser: UserType

beforeEach( () => {
    testsUser = {
        name: 'Ihor',
        age: 33,
        address: {
            title: 'Kiev'
        }
    }
})

test('reference type test', () => {
    increaseAge(testsUser)

    expect(testsUser.age).toBe(34)

    const superman = testsUser
    superman.age = 1000
    expect(testsUser.age).toBe(1000)
})

test('array reference test', () => {
    let users:UserType[] = [
        {name: 'Ihor', age: 33,address: {title: 'Kiev'}},
        {name: 'Mary', age: 23,address: {title: 'Kiev'}}
    ]

    let admins = users

    admins.push({name: 'Gleb', age: 13,address: {title: 'Kiev'}})


    expect(users[2]).toEqual({name: 'Gleb', age: 13,address: {title: 'Kiev'}})
})

test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount
    adminsCount++

    expect(usersCount).toBe(100)
})

test('reference type test', () => {
    let ads = testsUser.address
    let testUser2: UserType = {
        name: 'Onil',
        age: 27,
        address: ads
    }

    testUser2.address.title = 'Birma'

    expect(testsUser.address.title).toBe('Birma')
    expect(testsUser.address).toBe(testUser2.address)
})

test('reference type array test', () => {
    let ads = testsUser.address
    let testUser2: UserType = {
        name: 'Onil',
        age: 27,
        address: ads
    }

    const allUsers = [ testsUser, testUser2, {name: 'Goga', age: 22,address: ads}]
    const admins = [testsUser, testUser2]
    admins[0].name = 'SuperIhor'

    expect(allUsers[0].name).toBe('SuperIhor')
})

test('reference type array test', () => {
    const letters = ['e','c','d','a','b']

    letters.sort()
    expect(letters).toEqual(['a','b','c','d','e'])
})