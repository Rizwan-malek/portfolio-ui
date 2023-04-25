import { useSelector } from "react-redux";
import Container from '../../layouts/Container';


export default function LoginPage() {
    const { theme } = useSelector(state => state.theme);
    return (<>
        <Container className='pt-2 min-vh-100'>
            <h1 className="text-white">LOGIN</h1>
        </Container>
    </>)
};