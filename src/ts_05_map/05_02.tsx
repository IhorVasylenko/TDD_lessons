import {GovernmentBuildingsType, HousesType} from "../ts_02_obj/02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingsType[]) => {
    return buildings.map( build => build.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HousesType[]) => {
    return houses.map( house => house.address.street.title)
}

export const createMessages = (houses: HousesType[]) => {
    return houses.map( house => `Hello guys from ${house.address.street.title}.`)
}