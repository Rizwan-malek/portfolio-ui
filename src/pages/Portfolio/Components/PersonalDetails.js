import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';
import RDetailsSection from "../../../components/RDetailsSection";
import RSpinner from "../../../components/RSpinner";
import { makingPortfolioPayload } from "../../../redux/action/portfolio";
import { useEffect } from "react";

export default function PersonalDetails() {
    document.title = "PORTFOLIO | PERSONAL DETAILS";

    const { isLoading, } = useSelector(state => state.auth);
    const { requestPayload } = useSelector(state => state.portfolio);
    const dispatch = useDispatch();

    const formValidationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
    });

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(formValidationSchema)
    });

    useEffect(() => {
        if (requestPayload?.personalDetails) {
            Object.keys(requestPayload?.personalDetails).forEach((key) => {
                setValue(key, requestPayload?.personalDetails[key]);
            })
        }
    }, [requestPayload]);

    const handleRegisterSubmit = (data) => {
        dispatch(makingPortfolioPayload({ personalDetails: data }));
    }
    return (<>
        <RDetailsSection
            title={<><i className="fa fa-user-plus"></i>{" "}<strong>Personal details</strong></>}
            className='mt-2'>
            {isLoading &&
                <div className="d-flex justify-content-center pt-3">
                    <RSpinner />
                </div>}
            {!isLoading && <Form onSubmit={handleSubmit(handleRegisterSubmit)} noValidate>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First name <span className="text-danger">*</span> </Form.Label>
                    <Form.Control {...register("firstName")} type="text" placeholder="Enter first name" isInvalid={!!errors.firstName} />
                    {!!errors.firstName && <Form.Control.Feedback type="invalid">{errors.firstName.message}</Form.Control.Feedback>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="middleName">
                    <Form.Label>Middle name</Form.Label>
                    <Form.Control {...register("middleName")} type="text" placeholder="Enter last name" isInvalid={!!errors.middleName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last name <span className="text-danger">*</span></Form.Label>
                    <Form.Control {...register("lastName")} type="text" placeholder="Enter last name" isInvalid={!!errors.lastName} />
                    {!!errors.lastName && <Form.Control.Feedback type="invalid">{errors.lastName.message}</Form.Control.Feedback>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Gender</Form.Label>

                    <Form.Check type={"radio"} id={`male`}>
                        <Form.Check.Input {...register("gender")} type="radio" isInvalid={!!errors.gender} label={`Male`} value="male" id="male" />
                        <Form.Check.Label>Male</Form.Check.Label>
                    </Form.Check>
                    <Form.Check type={"radio"} id={`female`}>
                        <Form.Check.Input {...register("gender")} type="radio" isInvalid={!!errors.gender} label={`Female`} value="female" id="female" />
                        <Form.Check.Label>Female</Form.Check.Label>
                    </Form.Check>
                </Form.Group>
                <button className="btn btn-secondary">Save</button>
            </Form>}

        </RDetailsSection>
    </>)
}