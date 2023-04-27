import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from '../../layouts/Container';
import RDetailsSection from "../../components/RDetailsSection";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUserRegister } from "../../redux/api/auth";


export default function RegisterPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formValidationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        contactNumber: Yup.string().test("contactNumber", "Contact number is invalid", (value) => {
            if (value) {
                return !isNaN(value) && `${value}`.length == 10
            }
            return true;
        }),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string().required("Password is required")
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formValidationSchema)
    });

    const handleRegisterSubmit = (data) => {
        dispatch(authUserRegister(data, () => {
            navigate("/");
        }));
    }
    return (<>
        <Container className='pt-2 min-vh-100'>
            <RDetailsSection
                title={<><i className="fa fa-user-plus"></i>{" "}<strong>Create account</strong></>}
                className='mt-2'>
                <Form onSubmit={handleSubmit(handleRegisterSubmit)} noValidate>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First name <span className="text-danger">*</span> </Form.Label>
                        <Form.Control {...register("firstName")} type="text" placeholder="Enter first name" isInvalid={!!errors.firstName} />
                        {!!errors.firstName && <Form.Control.Feedback type="invalid">{errors.firstName.message}</Form.Control.Feedback>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last name <span className="text-danger">*</span></Form.Label>
                        <Form.Control {...register("lastName")} type="text" placeholder="Enter last name" isInvalid={!!errors.lastName} />
                        {!!errors.lastName && <Form.Control.Feedback type="invalid">{errors.lastName.message}</Form.Control.Feedback>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contactNumber">
                        <Form.Label>Contact number</Form.Label>
                        <Form.Control {...register("contactNumber")} type="text" placeholder="Enter contact number" isInvalid={!!errors.contactNumber} />
                        {!!errors.contactNumber && <Form.Control.Feedback type="invalid">{errors.contactNumber.message}</Form.Control.Feedback>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
                        <Form.Control {...register("email")} type="email" placeholder="Enter email" isInvalid={!!errors.email} />
                        {!!errors.email && <Form.Control.Feedback type="invalid">{errors.email.message}</Form.Control.Feedback>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                        <Form.Control {...register("password")} type="password" placeholder="Enter password" isInvalid={!!errors.password} />
                        {!!errors.password && <Form.Control.Feedback type="invalid">{errors.password.message}</Form.Control.Feedback>}
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