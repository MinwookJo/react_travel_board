import { Travel } from "../../../model/Travel";
import { FETCH_TRAVEL_LIST, FETCH_TRAVEL_LIST_SUCCESS, INSERT_TRAVEL, FETCH_TRAVEL_LIST_FAIL } from "./type";
import TravelAddForm from "../../../components/screen/TravelAddPage/components/TravelAddForm";

export type TravelActionType =  FetchTravelListSuccess | FetchTravelListFail ;

// Fetch
export interface FetchTravelListAction {
    type: typeof FETCH_TRAVEL_LIST
}

export interface FetchTravelListSuccess {
    type: typeof FETCH_TRAVEL_LIST_SUCCESS,
    payload: Travel[]
}

export interface FetchTravelListFail {
    type: typeof FETCH_TRAVEL_LIST_FAIL,
}

// Insert
export interface InsertTravelAction {
    type: typeof INSERT_TRAVEL,
    payload: TravelAddForm
}

export const fetchTravelList = (): FetchTravelListAction => ({
    type: FETCH_TRAVEL_LIST
})

export const fetchTravelListSuccess = (travels: Travel[]): FetchTravelListSuccess => ({
    type: FETCH_TRAVEL_LIST_SUCCESS,
    payload: travels
})
