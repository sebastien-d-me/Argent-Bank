/* Get Login Data */
export function getLoginData(data) {
    const obj = {
        status: data.status,
        message: data.message,
        token: data.body.token
    }
    return obj;
}

/* Get Login Fetch */
export function getLoginFetchData(data) {
    console.log(data)
    return data;
}