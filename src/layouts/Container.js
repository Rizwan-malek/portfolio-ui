import { useSelector } from "react-redux";

export default function Container({ children, className = "" }) {
    const { theme } = useSelector(state => state.theme);
    return (<>
        <div className={`container-fluid ${theme === 'dark' ? 'bg-dark' : 'bg-white'} ${className}`}>
            {children}
        </div>
    </>)
};