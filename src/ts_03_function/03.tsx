import {GovernmentBuildingsType, HousesType, CityType as CityType2} from "../ts_02_obj/02";//test 02

// test 01
type CityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}
type TechnologiesType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}

export const student: StudentType = {
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

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName
}

//test 02
export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire
}
export const toHireStaff = (building: GovernmentBuildingsType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export const createMessage = (city: CityType2) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men.`
}