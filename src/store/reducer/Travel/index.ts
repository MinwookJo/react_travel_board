import { Travel } from "../../../model/Travel";
import { TravelActionType } from "../../action/Travel";
import { FETCH_TRAVEL_LIST, INSERT_TRAVEL } from "../../action/Travel/type";

export type TravelState = {
    travels: Travel[]
}

const initialState: TravelState = {
    travels: []
}

const travelReducer = (state = initialState, action: TravelActionType): TravelState => {
    // TravelActionType 액션 마다 행동을 지정
    switch(action.type) {
        case FETCH_TRAVEL_LIST:
            return {
                ...state,
                travels: action.payload.map(
                    (travel: Travel) => ({...travel})
                )
            }
        case INSERT_TRAVEL:
            const temp = state.travels;
            temp.push(action.payload);
            return {
                ...state,
                travels: temp
            }
        default: 
            return state
    }
}

export default travelReducer;
