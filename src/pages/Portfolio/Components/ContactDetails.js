import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';
import RDetailsSection from "../../../components/RDetailsSection";
import RSpinner from "../../../components/RSpinner";
import { makingPortfolioPayload } from "../../../redux/action/portfolio";
import { Col, Row } from "react-bootstrap";
import { Fragment } from "react";

export default function ContactDetails() {
    document.title = "PORTFOLIO | CONTACT DETAILS";

    const { isLoading, } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const formValidationSchema = {
        contactTitle: Yup.string().required("Contact title is required"),
        contactValue: Yup.string().required("Contact value is required"),
    };

    const schema = Yup.object({
        contact: Yup.array()
            .of(Yup.object().shape(formValidationSchema))
    });

    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema),
        defaultValues: [{
            contactTitle: '',
            contactValueL: ''
        }]
    });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "contact",
    });

    const handleRegisterSubmit = (data) => {
        dispatch(makingPortfolioPayload(data));
    }
    return (<>
        <RDetailsSection
            title={<><i className="fas fa-address-card"></i>{" "}<strong>Contact details</strong></>}
            className='mt-2'>
            {isLoading &&
                <div className="d-flex justify-content-center pt-3">
                    <RSpinner />
                </div>}
            {!isLoading && <Form onSubmit={handleSubmit(handleRegisterSubmit)} noValidate>
                {fields.map((field, i) => (
                    <Fragment key={i}>
                        <Row className="mb-2">
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>Contact title <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`contact.${i}.contactTitle`)} type="text" placeholder="Enter first name" isInvalid={!!errors?.contact?.[i]?.contactTitle} />
                                    {!!errors?.contact?.[i]?.contactTitle && <Form.Control.Feedback type="invalid">{errors?.contact?.[i]?.contactTitle?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="middleName">
                                    <Form.Label>Contact value <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`contact.${i}.contactValue`)} type="text" placeholder="Enter last name" isInvalid={!!errors?.contact?.[i]?.contactValue} />
                                    {!!errors?.contact?.[i]?.contactValue && <Form.Control.Feedback type="invalid">{errors?.contact?.[i]?.contactValue?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={2} lg={2} className={"pt-3"}>
                                <Form.Group className="mb-3 d-flex justify-content-end" controlId="buttonGroup">
                                    <button onClick={() => remove(i)} className="btn btn-sm btn-secondary">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Fragment>
                ))}
                <Form.Group className="mb-3 d-flex justify-content-end gap-1" controlId="buttonGroup">
                    <button onClick={() => {
                        if (Object.keys(errors).length < 1) {
                            append({ contactTitle: '', contactValue: '' })
                        }
                    }} className="btn btn-sm btn-secondary">
                        <i className="fa fa-plus"></i> Add new contact
                    </button>
                </Form.Group>
                <Form.Group className="mb-3" controlId="middleName">
                    <button disabled={fields?.length < 1 || errors?.contact} type="submit" className="btn btn-secondary">Save</button>
                </Form.Group>
            </Form>}
        </RDetailsSection>
    </>)
}