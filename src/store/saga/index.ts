import { spawn } from "redux-saga/effects";
import { watchFetchTravelSaga } from "./Travel";

// root saga 사가함수들을 묶어줌
export default function* rootSaga() {
    yield spawn(watchFetchTravelSaga)
}
