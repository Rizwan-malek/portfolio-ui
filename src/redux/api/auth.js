const authUserRegister = (data, callback = () => { }) => async (dispatch, selector, { AxiosInstance, errorHandling, RToast, }) => {
    try {
        dispatch({ type: "AUTH_USER_REGISTER", status: "PENDING" });
        const response = await AxiosInstance.post("/auth/register", data);
        dispatch({
            type: "AUTH_USER_REGISTER",
            status: "SUCCESS",
            payload: response
        });
        RToast({
            type: "SUCCESS",
            message: response.data.message
        })
        callback();
    } catch (error) {
        errorHandling("AUTH_USER_REGISTER", dispatch, error);
    }
}

const authUserLogin = (data, callback = () => { }) => async (dispatch, selector, { AxiosInstance, errorHandling, RToast, }) => {
    try {
        dispatch({ type: "AUTH_USER_REGISTER", status: "PENDING" });
        const response = await AxiosInstance.post("/auth/login", data);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        console.log('response ==> ', response);
        dispatch({
            type: "AUTH_USER_REGISTER",
            status: "SUCCESS",
            payload: {
                token: response.data.data.token,
                user: response.data.data.user,
                message: response.data.message,
            }
        });
        RToast({
            type: "SUCCESS",
            message: response.data.message
        })
        callback();
    } catch (error) {
        errorHandling("AUTH_USER_REGISTER", dispatch, error);
    }
}
const authUserLogout = (data, callback = () => { }) => async (dispatch, selector, { AxiosInstance, errorHandling, RToast, }) => {
    try {
        dispatch({ type: "AUTH_USER_LOGOUT", status: "PENDING" });
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({
            type: "AUTH_USER_LOGOUT",
            status: "SUCCESS",
        });
        RToast({
            type: "SUCCESS",
            message: "User logout successfully"
        })
        callback();
    } catch (error) {
        errorHandling("AUTH_USER_LOGOUT", dispatch, error);
    }
}
export {
    authUserRegister,
    authUserLogin,
    authUserLogout
}