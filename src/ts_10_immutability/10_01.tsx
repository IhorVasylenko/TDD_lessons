import React from 'react'

export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type CompanyType = {
    id: number
    title: string
}
export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
}

export function makeHairStyle (u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}

    return copy
}

export function moveUser (u: UserWithLaptopType, newCity: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: newCity
        }
    }
}

export function upgradeUserLaptop (u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function moveUserToOtherHouse (u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function addNewBooksToUser (u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
        books: [...u.books.concat(newBooks)]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) =>  ({
        ...u, books: u.books.map(b => b === oldBook ? newBook : b)
})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) =>  ({
    ...u, books: u.books.filter(b => b !== bookForDelete)
})

export const updateCompanies = (user:  WithCompaniesType, companiesId: number, newTitle: string) =>  ({
    ...user, companies: user.companies.map(c => c.id === companiesId ? {...c, title: newTitle} : c)
})

export const updateCompanyTitle = (companies: {[key: string]: CompanyType[]}, userName: string, companyId: number, newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy
}

