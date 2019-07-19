import { Travel } from "../../../model/Travel";
import { TravelActionType } from "../../action/Travel";
import { SAVE_TRAVEL_LIST, INSERT_TRAVEL, DELETE_TRAVEL, UPDATE_TRAVEL } from "../../action/Travel/type";

export type TravelState = {
    travels: Travel[]
}

const initialState: TravelState = {
    travels: []
}

const travelReducer = (state = initialState, action: TravelActionType): TravelState => {
    // TravelActionType 액션 마다 행동을 지정
    switch(action.type) {
        case SAVE_TRAVEL_LIST:
            return {
                ...state,
                travels: action.payload
            }
        case INSERT_TRAVEL:
            const insertTemp = state.travels;
            insertTemp.push(action.payload);
            return {
                ...state,
                travels: insertTemp
            }
        case DELETE_TRAVEL:
            const deleteTemp = state.travels.filter(
                (element: Travel) => {
                    return element.id !== action.payload
                }
            );
            return {
                ...state,
                travels: deleteTemp
            }
        case UPDATE_TRAVEL:
            const updateTemp: Travel[] = [];
            state.travels.forEach(
                (element: Travel) => {
                    if(element.id === action.payload.id) {
                        updateTemp.push({...action.payload});
                    } else {
                        updateTemp.push(element);
                    }
                }
            )
            return {
                ...state,
                travels: updateTemp
            }
        default: 
            return state
    }
}

export default travelReducer;
