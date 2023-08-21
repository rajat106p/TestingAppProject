import axios from "axios";

export async function postData(apiUrl: string, payload = {}, optionalConfig = {}) {
    try {
        return await axios.post(apiUrl, payload, optionalConfig);
    }
    catch (error) {
        console.log("error", error)
    }
}

export async function getData(apiUrl: string, params = {}, optionalConfig = {}, payload = {}) {
    try {
        return await axios.get(apiUrl, {data: payload, params, ...optionalConfig })
    }
    catch (error) {
        console.log("error", error)
    }
}