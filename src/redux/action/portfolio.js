const makingPortfolioPayload = (payload, callback = () => { }) => async (dispatch, selector, { errorHandling, RToast }) => {
    try {
        dispatch({
            type: "MAKING_PAYLOAD_FOR_PORTFOLIO",
            status: "PENDING",
        });
        dispatch({
            type: "MAKING_PAYLOAD_FOR_PORTFOLIO",
            status: "SUCCESS",
            payload
        });
        RToast({ type: "SUCCESS", message: "Data has been successfully saved" })
    } catch (error) {
        errorHandling("MAKING_PAYLOAD_FOR_PORTFOLIO", dispatch, error);
    }
}
export {
    makingPortfolioPayload
}