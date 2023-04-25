import { useSelector } from "react-redux";
import Container from '../../layouts/Container';


export default function LoginPage() {
    const { theme } = useSelector(state => state.theme);
    return (<>
        <Container className='pt-5 min-vh-100'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <div className="mb-2">
                        <button className="btn btn-sm btn-secondary">Create your own cv</button>
                        <button className="btn btn-sm btn-secondary float-end">Login</button>
                    </div>
                </div>
            </div>
        </Container>
    </>)
};