import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

export default function RSpinner({ className }) {
    const { theme } = useSelector(state => state.theme);
    return <Spinner animation="grow" className={`${className} ${theme === 'light' ? 'text-dark' : 'text-white'}`} />;
}

