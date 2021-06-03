import React from 'react'

export type UserType = {
    name: string
    age: number
    address: {title: string}
}

let user: UserType = {
    name: 'Ihor',
    age: 33,
    address: {
        title: 'Kiev'
    }
}

export function increaseAge (u: UserType) {
    u.age++
}