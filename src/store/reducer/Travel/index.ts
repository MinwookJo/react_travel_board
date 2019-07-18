import { Travel } from "../../../model/Travel";
import { TravelActionType } from "../../action/Travel";
import { FETCH_TRAVEL_LIST_SUCCESS } from "../../action/Travel/type";

export type TravelState = {
    travels: Travel[]
}

const initialState: TravelState = {
    travels: []
}

const travelReducer = (state = initialState, action: TravelActionType): TravelState => {
    // TravelActionType 액션 마다 행동을 지정
    switch(action.type) {
        case FETCH_TRAVEL_LIST_SUCCESS:
            return {
                ...state,
                travels: action.payload.map(
                    (travel: Travel) => ({...travel})
                )
            }
        default: 
            return state
    }
}

export default travelReducer;
