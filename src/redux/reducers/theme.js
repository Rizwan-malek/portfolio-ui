const initialState = {
    theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : 'dark',
    isLoading: false,
    message: null,
    error: null,
};
const theme = (state = initialState, { type, status, payload }) => {
    switch (type) {
        case "CHANGE_THEME":
            switch (status) {
                case "PENDING":
                    return { ...state, isLoading: true };
                case "SUCCESS":
                    return { ...state, theme: payload, isLoading: false };
                case "FAILED":
                    return { ...state, isLoading: false, error: payload };
                default: return state;
            }
        default:
            return state;
    }
}
export default theme;