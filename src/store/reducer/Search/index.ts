import { SearchActionType } from "../../action/Search";
import { CHANGE_SERACH_CITY } from "../../action/Search/type";

export type SearchState = {
    city: string
}

const initialState: SearchState = {
    city: ''
}

const searchReducer = (state = initialState, action: SearchActionType): SearchState => {
    switch(action.type) {
        case CHANGE_SERACH_CITY:
                return {
                    ...state,
                    city: action.payload
                }
        default: return state
    }
}

export default searchReducer;