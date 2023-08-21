import {
  configureStore,
} from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootreducer,
  middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


