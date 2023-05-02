const initialState = {
    requestPayload: null,
    isLoading: false,
    message: null,
    error: null,
};
const portfolio = (state = initialState, { type, status, payload }) => {
    const pending = { ...state, isLoading: true };
    const failed = { ...state, isLoading: false, error: payload };
    switch (type) {
        case "MAKING_PAYLOAD_FOR_PORTFOLIO":
            switch (status) {
                case "PENDING":
                    return pending;
                case "SUCCESS":
                    return {
                        requestPayload: {
                            ...state.requestPayload,
                            ...payload
                        },
                        isLoading: false
                    }
                case "FAILED":
                    return failed
                default: return state
            }

        default: return state
    }
}
export default portfolio;