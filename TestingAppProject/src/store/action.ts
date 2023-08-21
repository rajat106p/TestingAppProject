import { LOADER_STATUS, POST_LIST, SET_POST_LIST } from "./constant";

export function postList(item:any){
    return{
        type:POST_LIST,
        data:item
    }
}

export function getPostList(){
    return{
        type:SET_POST_LIST, 
   }
}

export function setLoaderToggle(){
    return{
        type:LOADER_STATUS
    }
}