import {UsersType} from "./08_02";

let users: UsersType = {}

beforeEach( () => {
    users = {
        '101': {id: 101, name: 'Ihor'},
        '3232312': {id: 3232312, name: 'Iuliia'},
        '1212': {id: 1212, name: 'Gleb'},
        '1': {id: 1, name: 'Maryna'}
    }
})

test('should update corresponding user', () => {
    users['1'].name = 'Mery'

    expect(users['1'].name).toBe('Mery')
    expect(users['1']).toStrictEqual( {id: 1, name: 'Mery'} )
})
test('should delete corresponding user', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})