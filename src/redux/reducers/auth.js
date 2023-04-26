const initialState = {
    token: null,
    user: null,
    isLoading: false,
    message: null,
    error: null,
};
const auth = (state = initialState, { type, status, payload }) => {
    const pending = { ...state, isLoading: true };
    const failed = { ...state, isLoading: false, error: payload };
    switch (type) {
        case "AUTH_USER_LOGIN":
            switch (status) {
                case "PENDING":
                    return pending;
                case "SUCCESS":
                    return {
                        ...state,
                        token: payload.token,
                        user: payload.user,
                        message: payload.message,
                        isLoading: false
                    };
                case "FAILED":
                    return failed;
                default: return state;
            }
        default:
            return state;
    }
}
export default auth;