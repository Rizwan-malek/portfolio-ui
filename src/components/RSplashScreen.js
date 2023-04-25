import { useSelector } from "react-redux";

export default function RSplashScreen() {
    const { theme } = useSelector(state => state.theme);
    return (<div className={`vh-100 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
        <h1 className='display-1 position-absolute top-50 start-50 translate-middle'>PORTFOLIO</h1>
    </div>)
}