import { getLoginData, getLoginFetchData } from "../services/API-Data";


/* Get Login */
export const getLogin = async (identifiants) => {
    try {
        const URL_API = "http://localhost:3001/api/v1/user/login";

        const loginResponse = await fetch(URL_API, {
            body: JSON.stringify(identifiants),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST"
        }).then((response) => response.json());

        return await getLoginData(loginResponse);
    } catch(error) {
        return error;
    }
}

/* See if user is connected */
export const getLoginFetch = async (token) => {
    try {
        console.log(token)
        const URL_API = "http://localhost:3001/api/v1/user/profile";

        const loginFetchResponse = await fetch(URL_API, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer" + token
            },
            method: "POST"
        }).then((response) => response.json());
        console.log(loginFetchResponse)
        return await getLoginFetchData(loginFetchResponse);
    } catch(error) {
        return error;
    }
}