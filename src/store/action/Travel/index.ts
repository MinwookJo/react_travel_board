import { Travel } from "../../../model/Travel";
import { FETCH_TRAVEL_LIST, FETCH_TRAVEL_LIST_SUCCESS } from "./type";

export type TravelActionType =  FetchTravelListSuccess ;

export interface FetchTravelListAction {
    type: typeof FETCH_TRAVEL_LIST,
    payload: Travel[]
}

export interface FetchTravelListSuccess {
    type: typeof FETCH_TRAVEL_LIST_SUCCESS,
    payload: Travel[]
}

export const fetchTravelList = (travels: Travel[]): FetchTravelListAction => ({
    type: FETCH_TRAVEL_LIST,
    payload: travels
})

export const fetchTravelListSuccess = (travels: Travel[]): FetchTravelListSuccess => ({
    type: FETCH_TRAVEL_LIST_SUCCESS,
    payload: travels
})
