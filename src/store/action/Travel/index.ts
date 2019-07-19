import { Travel } from "../../../model/Travel";
import { FETCH_TRAVEL_LIST, INSERT_TRAVEL } from "./type";
import TravelAddForm from "../../../components/screen/TravelAddPage/components/TravelAddForm";

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
    payload: TravelAddForm
}
export const insertTravel = (form: TravelAddForm): InsertTravelAction => ({
    type: INSERT_TRAVEL,
    payload: form
})
