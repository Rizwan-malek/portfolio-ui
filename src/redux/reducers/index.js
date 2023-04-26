import { combineReducers } from "redux";
import theme from "./theme";
import auth from "./auth";

const rootReducers = combineReducers({
    theme,
    auth
});
export default rootReducers;