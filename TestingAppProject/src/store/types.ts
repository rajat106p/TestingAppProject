import { AxiosResponse } from "axios";

export interface INewActionType {
    endpoint: string,
    payload?: any,
    optionalConfig?: any
}

export interface ICreatedActionType {
    type: string,
    payload: INewActionType
}

