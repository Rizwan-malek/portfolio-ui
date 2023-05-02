import { combineReducers } from "redux";
import theme from "./theme";
import auth from "./auth";
import portfolio from "./portfolio"

const rootReducers = combineReducers({
    theme,
    auth,
    portfolio
});
export default rootReducers;