import {addSkill, doesStudentLiveIn, makeStudentActive, StudentType} from "./03";

let student: StudentType
beforeEach( () => {
    student = {
        id: 1,
        name : 'Ihor',
        age: 33,
        isActive: false,
        address: {
            streetTitle: 'Pravdy 33',
            city: {
                title: 'Kiev',
                countryTitle: 'Ukraine'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test('new tech skill should be added', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test('student should be active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('does student live in city?', () => {
    let result1 = doesStudentLiveIn(student, 'Minsk')
    let result2 = doesStudentLiveIn(student, 'Kiev')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})