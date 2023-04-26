import { Suspense } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import RSplashScreen from "./components/RSplashScreen";
import { PUBLIC_ROUTES } from "./routes";
import { changeTheme } from "./redux/action/theme";

function App() {
  const { theme } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <Suspense fallback={<RSplashScreen />}>
      <HashRouter>
        <Routes>
          {PUBLIC_ROUTES.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
      </HashRouter>
      <button
        type="button"
        className="btn btn-secondary back-to-top btn-lg"
        onClick={() => {
          dispatch(changeTheme())
        }}
      >
        {theme === "dark" ? <i className="fa fa-sun"></i> : <i className="fa fa-moon"></i>}
      </button>
    </Suspense>
  );
}

export default App;
