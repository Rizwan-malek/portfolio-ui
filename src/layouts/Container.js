import { useSelector } from "react-redux";
import Header from "./Header";

export default function Container({ children, className = "" }) {
    const { theme } = useSelector(state => state.theme);
    const { isLoading, user } = useSelector(state => state.auth);
    return (<>
        <div className={`container-fluid ${theme === 'dark' ? 'bg-dark' : 'bg-white'} ${className}`}>
            <div className='row justify-content-center'>
                <div className='col-xs-12 col-sm-12 col-md-10 col-lg-6 col-xl-6'>
                    <Header />
                    {!isLoading && user !== null && user &&
                        <div className="alert alert-success mt-3">
                            <strong>Welcome, {user?.firstName + " " + user?.lastName}</strong>
                        </div>}
                    {children}
                </div>
            </div>
        </div>
    </>)
};