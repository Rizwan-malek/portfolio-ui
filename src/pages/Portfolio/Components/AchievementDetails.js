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

export default function AchievementDetails() {
    document.title = "PORTFOLIO | CONTACT DETAILS";

    const { isLoading, } = useSelector(state => state.auth);
    const { isLoading: isLoadingPortfolio, requestPayload } = useSelector(state => state.portfolio);
    const dispatch = useDispatch();

    const formValidationSchema = {
        title: Yup.string().required("Title is required"),
        organization: Yup.string().required("Organization is required"),
    };

    const schema = Yup.object({
        achievement: Yup.array()
            .of(Yup.object().shape(formValidationSchema))
    });

    const { register, handleSubmit, formState: { errors }, control, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const { fields, append, remove, } = useFieldArray({
        control,
        name: "achievement",
    });

    useEffect(() => {
        if (requestPayload?.achievementDetails) {
            requestPayload?.achievementDetails?.achievement?.forEach((detail) => append(detail))
        }
        return () => reset();
    }, [requestPayload]);


    const handleAchievementSubmit = (data) => {
        dispatch(makingPortfolioPayload({ achievementDetails: data }));
    }
    return (<>
        <RDetailsSection
            title={<><i className="fa fa-trophy"></i>{" "}<strong>Achievement details</strong></>}
            className='mt-2'>
            {isLoading &&
                <div className="d-flex justify-content-center pt-3">
                    <RSpinner />
                </div>}
            {!isLoading && <Form onSubmit={handleSubmit(handleAchievementSubmit)} noValidate>
                {fields.map((field, i) => (
                    <Fragment key={i}>
                        <Row className="mb-2">
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="title">
                                    <Form.Label>Title <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`achievement.${i}.title`)} type="text" placeholder="Enter first name" isInvalid={!!errors?.achievement?.[i]?.title} />
                                    {!!errors?.achievement?.[i]?.title && <Form.Control.Feedback type="invalid">{errors?.achievement?.[i]?.title?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="organization">
                                    <Form.Label>Organization <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`achievement.${i}.organization`)} type="text" placeholder="Enter first name" isInvalid={!!errors?.achievement?.[i]?.organization} />
                                    {!!errors?.achievement?.[i]?.organization && <Form.Control.Feedback type="invalid">{errors?.achievement?.[i]?.organization?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={10} lg={10} className="mt-2">
                                <Form.Group controlId="description">
                                    <Form.Label>Description <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`achievement.${i}.description`)} as="textarea" placeholder="Enter last name" isInvalid={!!errors?.contact?.[i]?.description} rows={4} />
                                    {!!errors?.achievement?.[i]?.description && <Form.Control.Feedback type="invalid">{errors?.achievement?.[i]?.description?.message}</Form.Control.Feedback>}
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
                    <button disabled={fields?.length < 1} type="submit" className="btn btn-secondary">Save</button>
                </Form.Group>
            </Form>}
        </RDetailsSection>
    </>)
}