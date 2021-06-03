import {createGreetingMessage, ManType} from "./05_01";

let people: ManType[] = []

beforeEach ( () => {
    people = [
        {name: 'Ihor Vasylenko', age: 33},
        {name: 'Iuliia Vasylenko', age: 32},
        {name: 'Maryna Synegub', age: 27}
    ]
})

test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Ihor. Welcome to home!')
    expect(messages[1]).toBe('Hello Iuliia. Welcome to home!')
    expect(messages[2]).toBe('Hello Maryna. Welcome to home!')
})