const makingPortfolioPayload = (payload, callback = () => { }) => async (dispatch, selector, { errorHandling }) => {
    try {
        dispatch({
            type: "MAKING_PAYLOAD_FOR_PORTFOLIO",
            status: "PENDING",
        });
        dispatch({
            type: "MAKING_PAYLOAD_FOR_PORTFOLIO",
            status: "PENDING",
            payload
        });
    } catch (error) {
        errorHandling("MAKING_PAYLOAD_FOR_PORTFOLIO", dispatch, error);
    }
}
export {
    makingPortfolioPayload
}