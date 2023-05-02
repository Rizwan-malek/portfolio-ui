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
import { useEffect } from "react";

export default function ProjectDetails() {
    document.title = "PORTFOLIO | PROJECT DETAILS";

    const { isLoading: isLoadingPortfolio, requestPayload } = useSelector(state => state.portfolio);
    const { isLoading, } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const formValidationSchema = {
        title: Yup.string().required("Title is required"),
        subTitle: Yup.string().required("Sub title is required"),
    };

    const schema = Yup.object({
        project: Yup.array()
            .of(Yup.object().shape(formValidationSchema))
    });

    const { register, handleSubmit, formState: { errors }, control, reset, setValue } = useForm({
        resolver: yupResolver(schema),
    });
    const { fields, append, remove, } = useFieldArray({
        control,
        name: "project",
    });

    useEffect(() => {
        if (requestPayload?.projectDetails) {
            requestPayload?.projectDetails?.project?.forEach((detail) => append(detail))
        }
        return () => reset();

    }, [requestPayload]);


    const handleProjectSubmit = (data) => {
        dispatch(makingPortfolioPayload({ projectDetails: data }));
    }
    return (<>
        <RDetailsSection
            title={<><i className="fas fa-project-diagram"></i>{" "}<strong>Project details</strong></>}
            className='mt-2'>
            {isLoading &&
                <div className="d-flex justify-content-center pt-3">
                    <RSpinner />
                </div>}
            {!isLoading && <Form onSubmit={handleSubmit(handleProjectSubmit)} noValidate>
                {fields.map((field, i) => (
                    <Fragment key={i}>
                        <Row className="mb-2">
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="title">
                                    <Form.Label>Title <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`project.${i}.title`)} type="text" placeholder="Enter title" isInvalid={!!errors?.project?.[i]?.title} />
                                    {!!errors?.project?.[i]?.title && <Form.Control.Feedback type="invalid">{errors?.project?.[i]?.title?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="subTitle">
                                    <Form.Label>Sub Title <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`project.${i}.subTitle`)} type="text" placeholder="Enter subTitle" isInvalid={!!errors?.project?.[i]?.subTitle} />
                                    {!!errors?.project?.[i]?.subTitle && <Form.Control.Feedback type="invalid">{errors?.project?.[i]?.subTitle?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={10} lg={10} className="mt-2">
                                <Form.Group controlId="description">
                                    <Form.Label>Description <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`project.${i}.description`)} as="textarea" placeholder="Enter last name" isInvalid={!!errors?.contact?.[i]?.description} rows={4} />
                                    {!!errors?.project?.[i]?.description && <Form.Control.Feedback type="invalid">{errors?.project?.[i]?.description?.message}</Form.Control.Feedback>}
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
                            append({ contactTitle: '', contactValue: '' })
                        }
                    }} className="btn btn-sm btn-secondary">
                        <i className="fa fa-plus"></i> Add new skill
                    </button>
                </Form.Group>
                <Form.Group className="mb-3" controlId="middleName">
                    <button disabled={fields?.length < 1 || errors?.contact} type="submit" className="btn btn-secondary">Save</button>
                </Form.Group>
            </Form>}
        </RDetailsSection>
    </>)
}