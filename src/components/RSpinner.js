import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

export default function RSpinner({ className = "" }) {
    return <Spinner animation="grow" className={`${className}`} />;
}

