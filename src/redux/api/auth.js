const authUserLogin = (data, callback = () => { }) => async (dispatch, selector, { AxiosInstance, errorHandling, RToast, }) => {
    try {
        dispatch({ type: "AUTH_USER_REGISTER", status: "PENDING" });
        const response = await AxiosInstance.post("/auth/register", data);
        console.log('response ==> ', response);
        dispatch({
            type: "AUTH_USER_REGISTER",
            status: "SUCCESS",
            payload: response
        });
        callback();
    } catch (error) {
        errorHandling("AUTH_USER_REGISTER", dispatch, error);
    }
}
const authUserRegister = (data, callback = () => { }) => async (dispatch, selector, { AxiosInstance, errorHandling, RToast, }) => {
    try {
        dispatch({ type: "AUTH_USER_REGISTER", status: "PENDING" });
        const response = await AxiosInstance.post("/auth/register", data);
        console.log('response ==> ', response);
        dispatch({
            type: "AUTH_USER_REGISTER",
            status: "SUCCESS",
            payload: response
        });
        callback();
    } catch (error) {
        errorHandling("AUTH_USER_REGISTER", dispatch, error);
    }
}

export {
    authUserLogin,
    authUserRegister
}