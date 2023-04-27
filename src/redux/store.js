import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";
import AxiosInstance from "../configs/http-config";
import errorHandling from "../helper/errorHandling";
import RToast from "../components/RToast";


const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument({
        AxiosInstance,
        errorHandling,
        RToast,
    }))));
export default store;