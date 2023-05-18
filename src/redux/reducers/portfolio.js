const initialState = {
    requestPayload: null,
    route: 0,
    routes: ["personal", "contact", "education", "experience", "skill", "project", "achievement", "certificate", "templates"],
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
                        ...state,
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
        case "CHANGE_ROUTE":
            return {
                ...state,
                route: payload,
                isLoading: false
            }
        default: return state
    }
}
export default portfolio;