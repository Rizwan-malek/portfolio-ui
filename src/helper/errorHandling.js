// import { authUserLogout } from "src/redux/api/auth";
import RToast from "../components/RToast";

/**
 * 
 * @param {
 * } ACTION 
 * @param {*} dispatch 
 * @param {*} error 
 * 
 * @description (ACTION, dispatch, error)
 */

function errorHandling(ACTION, dispatch, error) {
    if (error.response) {
        if (error.response.data.message === "Unauthorized access") {
            RToast({ type: "ERROR", message: error.response.data.error ? error.response.data.error : error.response.data.message });
            // return dispatch(authUserLogout())
        }
        dispatch({
            type: ACTION,
            status: "FAILED",
            payload: error.response.data.error ? error.response.data.error : error.response.data.message,
        });
        RToast({ type: "ERROR", message: error.response.data.error ? error.response.data.error : error.response.data.message });
    } else if (error.request) {
        dispatch({
            type: ACTION,
            status: "FAILED",
            payload: "Network error !",
        });
        RToast({ type: "ERROR", message: "Network error !" });
    } else {
        dispatch({
            type: ACTION,
            status: "FAILED",
            payload: "Something went wrong !",
        });
        RToast({ type: "ERROR", message: "Something went wrong !" });
    }
}
export default errorHandling;