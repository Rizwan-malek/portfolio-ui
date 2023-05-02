import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from '../../layouts/Container';
import RDetailsSection from "../../components/RDetailsSection";
import { authUserLogin } from "../../redux/api/auth";
import RSpinner from "../../components/RSpinner";

export default function LoginPage() {
    document.title = "PORTFOLIO | LOGIN";

    const { isLoading, } = useSelector(state => state.auth);
    const { theme } = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const formValidationSchema = Yup.object({
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string().required("Password is required")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formValidationSchema)
    });

    const handleLoginSubmit = (data) => {
        dispatch(authUserLogin(data, () => {
            navigate("/");
        }));
    }

    return (<>
        <Container className='pt-2 min-vh-100'>
            <RDetailsSection
                title={<><i className="fa fa-sign-in"></i>{" "}<strong>Login</strong></>}
                className='mt-2'>
                <>
                    {isLoading &&
                        <div className="d-flex justify-content-center pt-3">
                            <RSpinner />
                        </div>}

                    {!isLoading && <Form onSubmit={handleSubmit(handleLoginSubmit)} noValidate>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control {...register("email")} type="email" placeholder="Enter email" isInvalid={!!errors.email} />
                            {!!errors.email && <Form.Control.Feedback type="invalid">{errors.email.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control {...register("password")} type="password" placeholder="Enter password" isInvalid={!!errors.password} />
                            {!!errors.password && <Form.Control.Feedback type="invalid">{errors.password.message}</Form.Control.Feedback>}
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
                    </Form>}
                </>
            </RDetailsSection>
        </Container>
    </>)
};