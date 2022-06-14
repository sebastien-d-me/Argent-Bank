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
    if(data.body !== undefined) {
        const obj = {
            status: data.status,
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName
        }

        return obj;
    } else {
        const obj = {
            status: 0,
            email: "",
            firstName: "",
            lastName: ""
        }
        
        return obj;
    }
}