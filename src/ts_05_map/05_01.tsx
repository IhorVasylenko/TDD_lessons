export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: 'Ihor Vasylenko', age: 33},
    {name: 'Iuliia Vasylenko', age: 32},
    {name: 'Maryna Synegub', age: 27}
]

const dimychTransformator = (man: ManType) => ({
        stack: ['css, html','js','tdd','react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })

const devs = [
    {
        stack: ['css, html','js','tdd','react'],
    firstName: 'Ihor', lastName: 'Vasylenko'
    },
    {
        stack: ['css, html','js','tdd','react'],
        firstName: 'Iuliia', lastName: 'Vasylenko'
    },
    {
        stack: ['css, html','js','tdd','react'],
        firstName: 'Maryna', lastName: 'Synegub'
    }
]

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const dev3 = people.map(dimychTransformator)

const dev4 = people.map( man => ({
    stack: ['css, html','js','tdd','react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

const messages = people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to home!`)

export const createGreetingMessage = (people: ManType[]) => {
    return people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to home!`)
}