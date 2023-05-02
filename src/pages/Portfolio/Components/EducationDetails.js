import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';
import RDetailsSection from "../../../components/RDetailsSection";
import RSpinner from "../../../components/RSpinner";
import { makingPortfolioPayload } from "../../../redux/action/portfolio";
import { Col, Row } from "react-bootstrap";
import { Fragment, useEffect } from "react";

export default function EducationDetails() {
    document.title = "PORTFOLIO | EDUCATION DETAILS";

    const { isLoading, } = useSelector(state => state.auth);
    const { isLoading: isLoadingPortfolio, requestPayload } = useSelector(state => state.portfolio);
    const dispatch = useDispatch();

    const formValidationSchema = {
        educationTitle: Yup.string().required("Title is required"),
        marks: Yup.string().required("Marks is required"),
    };

    const schema = Yup.object({
        education: Yup.array()
            .of(Yup.object().shape(formValidationSchema))
    });

    const { register, handleSubmit, formState: { errors }, control, reset } = useForm({
        resolver: yupResolver(schema),
        // defaultValues: {
        //     education: [{
        //         contactTitle: '',
        //         contactValueL: ''
        //     }]
        // }
    });
    const { fields, append, remove, } = useFieldArray({
        control,
        name: "education",
    });

    useEffect(() => {
        if (requestPayload?.educationDetaiils) {
            requestPayload?.educationDetaiils?.education?.forEach((detail) => {
                append(detail)
            })
        }
        return () => {
            reset();
        }
    }, [requestPayload]);


    const handleEducationSubmit = (data) => {
        dispatch(makingPortfolioPayload({ educationDetaiils: data }));
    }
    return (<>
        <RDetailsSection
            title={<><i className="fas fa-graduation-cap"></i>{" "}<strong>Education details</strong></>}
            className='mt-2'>
            {isLoading &&
                <div className="d-flex justify-content-center pt-3">
                    <RSpinner />
                </div>}
            {!isLoading && <Form onSubmit={handleSubmit(handleEducationSubmit)} noValidate>
                {fields.map((field, i) => (
                    <Fragment key={i}>
                        <Row className="mb-2">
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="title">
                                    <Form.Label>Title <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`education.${i}.educationTitle`)} type="text" placeholder="Enter title" isInvalid={!!errors?.education?.[i]?.educationTitle} />
                                    {!!errors?.education?.[i]?.educationTitle && <Form.Control.Feedback type="invalid">{errors?.education?.[i]?.educationTitle?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="marks">
                                    <Form.Label>Marks <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`education.${i}.marks`)} type="text" placeholder="Enter last name" isInvalid={!!errors?.education?.[i]?.marks} />
                                    {!!errors?.education?.[i]?.marks && <Form.Control.Feedback type="invalid">{errors?.education?.[i]?.marks?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5} className="mt-2">
                                <Form.Group controlId="startDate">
                                    <Form.Label>Start date <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`education.${i}.startDate`)} type="date" placeholder="Enter last name" isInvalid={!!errors?.education?.[i]?.startDate} />
                                    {!!errors?.education?.[i]?.startDate && <Form.Control.Feedback type="invalid">{errors?.education?.[i]?.startDate?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5} className="mt-2">
                                <Form.Group controlId="endDate">
                                    <Form.Label>End date <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`education.${i}.endDate`)} type="date" placeholder="Enter last name" isInvalid={!!errors?.education?.[i]?.endDate} />
                                    {!!errors?.education?.[i]?.endDate && <Form.Control.Feedback type="invalid">{errors?.education?.[i]?.endDate?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={2} lg={2} className={"pt-3"}>
                                <Form.Group className="mb-3 d-flex justify-content-end" controlId="buttonGroup">
                                    <button onClick={() => remove(i)} className="btn btn-sm btn-secondary" type="button">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />
                    </Fragment>
                ))}
                <Form.Group className="mb-3 d-flex justify-content-end gap-1" controlId="buttonGroup">
                    <button onClick={() => {
                        if (Object.keys(errors).length < 1) {
                            append({ educationTitle: '', marks: '', startDate: '', endDate: '' })
                        }
                    }} className="btn btn-sm btn-secondary" type="button">
                        <i className="fa fa-plus"></i> Add new education
                    </button>
                </Form.Group>
                <Form.Group className="mb-3" controlId="middleName">
                    <button disabled={fields?.length < 1} type="submit" className="btn btn-secondary">Save</button>
                </Form.Group>
            </Form>}
        </RDetailsSection>
    </>)
}