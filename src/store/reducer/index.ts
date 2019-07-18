import travelReducer, { TravelState } from "./Travel";
import { combineReducers } from "redux";
import searchReducer, { SearchState } from "./Search";

// 루트 스토어 스테이트
export type RootState = {
    travelReducer: TravelState,
    searchReducer: SearchState
}

// reducer를 묶어줌
const rootReducer = combineReducers({
    travelReducer,
    searchReducer
})

export default rootReducer