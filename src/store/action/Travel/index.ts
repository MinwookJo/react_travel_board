import { Travel } from "../../../model/Travel";
import { SAVE_TRAVEL_LIST, INSERT_TRAVEL, DELETE_TRAVEL, UPDATE_TRAVEL } from "./type";

export type TravelActionType =  SaveTravelListAction | InsertTravelAction | DeleteTravelAction | UpdateTravelAction ;

// Fetch
export interface SaveTravelListAction {
    type: typeof SAVE_TRAVEL_LIST
    payload: Travel[]
}
export const saveTravelList = (travels: Travel[]): SaveTravelListAction => ({
    type: SAVE_TRAVEL_LIST,
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

// Delete
export interface DeleteTravelAction {
    type: typeof DELETE_TRAVEL,
    payload: number
}

export const deleteTravel = (id: number): DeleteTravelAction => ({
    type: DELETE_TRAVEL,
    payload: id
})

// Update
export interface UpdateTravelAction {
    type: typeof UPDATE_TRAVEL,
    payload: Travel
}

export const updateTravel = (travel: Travel): UpdateTravelAction => ({
    type: UPDATE_TRAVEL,
    payload: travel
})