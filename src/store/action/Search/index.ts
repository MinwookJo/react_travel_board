import { CHANGE_SERACH_CITY } from "./type";

export type SearchActionType = ChangeSearchCity;

export interface ChangeSearchCity {
    type: typeof CHANGE_SERACH_CITY,
    payload: string
}

export const changeSerachCity = (city: string): ChangeSearchCity => ({
    type: CHANGE_SERACH_CITY,
    payload: city
})
