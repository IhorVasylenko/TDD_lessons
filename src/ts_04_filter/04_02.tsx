import {CityType, GovernmentBuildingsType, HousesType} from "../ts_02_obj/02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], staffCount: number) => {
    return buildings.filter(build => build.staffCount > staffCount)
}
