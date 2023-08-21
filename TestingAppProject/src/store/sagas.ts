import { all, fork, put, takeEvery } from "redux-saga/effects";
//layout
import loginSaga from "./login/loginsaga";
import { LOADER_STATUS, POST_LIST, SET_POST_LIST } from "./constant";
import { ICreatedActionType } from "./types";
import store from '../store'
import { setLoaderToggle } from "./action";
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';


function* postList(action: ICreatedActionType): any{
  yield put({type:LOADER_STATUS,status:true})
  const url = `${baseUrl}`;
  let response = yield fetch(url);
  response = yield response.json();
  yield put({type:POST_LIST,response})
  yield put({type:LOADER_STATUS,status:false})
}

function* rootSaga() {
  yield takeEvery(SET_POST_LIST,postList);
}

export default rootSaga;
