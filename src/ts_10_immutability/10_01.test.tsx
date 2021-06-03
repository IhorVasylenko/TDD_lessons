import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanies, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";

/*let testsUser: UserType

beforeEach( () => {
    testsUser = {
        name: 'Ihor',
        hair: 32,
        address: {
            title: 'Kiev'
        }
    }
})*/

test('reference type test', () => {
    let user: UserType = {
        name: 'Ihor',
        hair: 32,
        address: {
            city: 'Kiev'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Ihor',
        hair: 32,
        address: {
            city: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Minsk')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Minsk')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Ihor',
        hair: 32,
        address: {
            city: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('change house', () => {
    let user:UserWithLaptopType & UserWithBooksType = {
        name: 'Ihor',
        hair: 32,
        address: {
            city: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS', 'HTML', 'JS', 'React']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
    expect(user.address.house).toBe(12)
})

test('add new books', () => {
    let user:UserWithLaptopType & UserWithBooksType = {
        name: 'Ihor',
        hair: 32,
        address: {
            city: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS', 'HTML', 'JS', 'React']
    }

    const userCopy = addNewBooksToUser(user, ['TS', 'Rest API'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(6)
    expect(user.books.length).toBe(4)
    expect(userCopy.books[4]).toBe('TS')
    expect(userCopy.books[5]).toBe('Rest API')
})

test('update JS to TS', () => {
    let user:UserWithLaptopType & UserWithBooksType = {
        name: 'Ihor',
        hair: 32,
        address: {
            city: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS', 'HTML', 'JS', 'React']
    }

    const userCopy = updateBook(user, 'JS', 'TS')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(user.books.length)
    expect(userCopy.books[2]).toBe('TS')
    expect(user.books[2]).toBe('JS')
})

test('remove book JS', () => {
    let user:UserWithLaptopType & UserWithBooksType = {
        name: 'Ihor',
        hair: 32,
        address: {
            city: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS', 'HTML', 'JS', 'React']
    }

    const userCopy = removeBook(user, 'JS')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).not.toBe(user.books.length)
    expect(userCopy.books[2]).toBe('React')
    expect(user.books[2]).toBe('JS')
})

test('update companies "Epam', () => {
    let user:UserWithLaptopType & WithCompaniesType = {
        name: 'Ihor',
        hair: 32,
        address: {
            city: 'Kiev',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Eapm'},
            {id: 2, title: 'Google'}
            ]
    }

    const userCopy = updateCompanies(user, 1, 'Epam') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies.length).toBe(user.companies.length)
    expect(userCopy.companies[0].title).toBe('Epam')
    expect(user.companies[0].title).toBe('Eapm')
})

test('update company', () => {
    let companies = {
        'Ihor': [{id: 1, title: 'Eapm'}, {id: 2, title: 'Google'}],
        'Gleb': [{id: 2, title: 'Google'}]
    }

    const companyCopy = updateCompanyTitle(companies, 'Ihor', 1, 'Epam')

    expect(companyCopy['Ihor']).not.toBe(companies['Ihor'])
    expect(companyCopy['Gleb']).toBe(companies['Gleb'])
    expect(companyCopy['Ihor'][0].title).toBe('Epam')
})






