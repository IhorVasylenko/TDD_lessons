import {ManType} from "./07_01";

let props: ManType

beforeEach ( () => {
    props = {
        name: 'Ihor',
        age: 33,
        lessons: [{title: '1'},{title: '2'},{title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Pravdy'
            }
        }
    }
})

test('destructuring object', () => {
    //const {age, lessons, address: {street: {title}}} = props // второй вариант, ттяжелее для восприятия
    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(33)
    expect(lessons.length).toBe(3)
    expect(title).toBe('Pravdy')
})

test('destructuring array', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    const [,ls1, ...restLessons] = props.lessons
    //const [ls1] = props.lessons //если нам надо только один элемент
    //const [,ls2] = props.lessons //если нам надо только один элемент и он не первый, ставим запятую

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(ls1.title).toBe('2')
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0].name).toBe('react')
    expect(restLessons[0]).toStrictEqual({title: '3', name: 'react'})
})