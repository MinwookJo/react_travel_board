import travelReducer, { TravelState } from "./Travel";
import { combineReducers } from "redux";

// 루트 스토어 스테이트
export type RootState = {
    travelReducer: TravelState
}

// reducer를 묶어줌
const rootReducer = combineReducers({
    travelReducer
})

export default rootReducer