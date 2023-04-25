const changeTheme = () => async (dispatch, selector,) => {
    try {
        dispatch({
            type: "CHANGE_THEME",
            status: "PENDING",
        });
        let theme;
        if (localStorage.getItem("theme") && localStorage.getItem("theme") === "light") {
            theme = 'dark';
        } else {
            theme = 'light';
        }
        localStorage.setItem("theme", theme);
        dispatch({
            type: "CHANGE_THEME",
            status: "SUCCESS",
            payload: theme
        });
    } catch (error) {
        console.log('error ==> ', error);
    }
}
export {
    changeTheme
}