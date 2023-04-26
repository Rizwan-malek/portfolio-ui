import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from '../../layouts/Container';
import RDetailsSection from "../../components/RDetailsSection";
import { useNavigate } from "react-router-dom";


export default function RegisterPage() {
    const { theme } = useSelector(state => state.theme);
    const navigate = useNavigate();
    return (<>
        <Container className='pt-2 min-vh-100'>
            <RDetailsSection
                title={<><i className="fa fa-user-plus"></i>{" "}<strong>Create account</strong></>}
                className='mt-2'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact number</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-flex gap-2">
                        <Button variant="secondary" type="submit">
                            Submit details
                        </Button>
                        <Button onClick={() => navigate("/auth")} variant="link" type="button">
                            Already have account ?, Login now
                        </Button>
                    </div>
                </Form>

            </RDetailsSection>
        </Container>
    </>)
};