import { combineReducers } from "@reduxjs/toolkit";
import { LOADER_STATUS, POST_LIST, SET_POST_LIST } from "./constant";

const initialState: any = [];

export const reducer = (state = initialState, action: any) =>{
    switch(action.type){
        case POST_LIST:
            return {
                state,
                list:action.response
            }
        case SET_POST_LIST:
            return [
                ...state,
                action.data
            ]
        case LOADER_STATUS:
            return {
                ...state,
                status:action.status
            }
        default:
            return state
    }
}
