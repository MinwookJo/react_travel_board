import { Travel } from "../../../model/Travel";
import { FETCH_TRAVEL_LIST, INSERT_TRAVEL } from "./type";

export type TravelActionType =  FetchTravelListAction | InsertTravelAction ;

// Fetch
export interface FetchTravelListAction {
    type: typeof FETCH_TRAVEL_LIST
    payload: Travel[]
}
export const fetchTravelList = (travels: Travel[]): FetchTravelListAction => ({
    type: FETCH_TRAVEL_LIST,
    payload: travels
})

// Insert
export interface InsertTravelAction {
    type: typeof INSERT_TRAVEL,
    payload: Travel
}
export const insertTravel = (form: Travel): InsertTravelAction => ({
    type: INSERT_TRAVEL,
    payload: form
})
