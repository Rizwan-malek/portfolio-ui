import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from '../../layouts/Container';
import RDetailsSection from "../../components/RDetailsSection";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
    const { theme } = useSelector(state => state.theme);
    const navigate = useNavigate();
    return (<>
        <Container className='pt-2 min-vh-100'>
            <RDetailsSection
                title={<><i className="fa fa-sign-in"></i>{" "}<strong>Login</strong></>}
                className='mt-2'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <div className="d-flex gap-2">
                        <Button variant="secondary" type="submit">
                            Login
                        </Button>
                        <Button onClick={() => navigate("/auth/register")} variant="link" type="button">
                            Create new account ?
                        </Button>
                    </div>
                </Form>

            </RDetailsSection>
        </Container>
    </>)
};