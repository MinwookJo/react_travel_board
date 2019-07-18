import * as actions from "../../action/Travel";
import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import { FETCH_TRAVEL_LIST } from "../../action/Travel/type";
import { API_PATH } from "../../../constants/api";

// fetchTravelList Saga
// fetchTravelList  액션이 실행될때 실행할 비동기
export function* fetchTravelListSaga() {
    try {
        const { data } = yield axios.get(API_PATH + 'travel');
        yield put(actions.fetchTravelListSuccess(data));
    } catch (error) {
        console.log(error);
    }
}

// fetchTravelList Watcher
// FETCH_TRAVEL_LIST 액션에 실행될 saga 함수 등록
export function* watchFetchTravelSaga() {
    yield takeEvery(FETCH_TRAVEL_LIST, fetchTravelListSaga)
}