import { useSelector } from "react-redux";
import Header from "./Header";

export default function Container({ children, className = "" }) {
    const { theme } = useSelector(state => state.theme);
    return (<>
        <div className={`container-fluid ${theme === 'dark' ? 'bg-dark' : 'bg-white'} ${className}`}>
            <div className='row justify-content-center'>
                <div className='col-xs-12 col-sm-12 col-md-8 col-lg-6'>
                    <Header />
                    {children}
                </div>
            </div>
        </div>
    </>)
};