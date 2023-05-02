import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';
import RDetailsSection from "../../../components/RDetailsSection";
import RSpinner from "../../../components/RSpinner";
import { makingPortfolioPayload } from "../../../redux/action/portfolio";
import { Col, Row } from "react-bootstrap";
import { Fragment } from "react";
import ReactStars from "react-rating-stars-component";
import { useEffect } from "react";

export default function ContactDetails() {
    document.title = "PORTFOLIO | CONTACT DETAILS";

    const { theme } = useSelector(state => state.theme);
    const { isLoading, } = useSelector(state => state.auth);
    const { isLoading: isLoadingPortfolio, requestPayload } = useSelector(state => state.portfolio);
    const dispatch = useDispatch();

    const formValidationSchema = {
        title: Yup.string().required("Title is required"),
        star: Yup.string().required("Star is required"),
    };

    const schema = Yup.object({
        skill: Yup.array()
            .of(Yup.object().shape(formValidationSchema))
    });

    const { register, handleSubmit, formState: { errors }, control, setValue, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const { fields, append, remove, } = useFieldArray({
        control,
        name: "skill",
    });

    useEffect(() => {
        if (requestPayload?.skillDetails) {
            requestPayload?.skillDetails?.skill?.forEach((detail) => {
                append(detail)
            })
        }
        return () => {
            reset();
        }
    }, [requestPayload]);


    const handleSkillSubmit = (data) => {
        console.log('data ==> ', data);

        dispatch(makingPortfolioPayload({ skillDetails: data }));
    }

    return (<>
        <RDetailsSection
            title={<><i className="fas fa-brain"></i>{" "}<strong>Skill details</strong></>}
            className='mt-2'>
            {isLoading &&
                <div className="d-flex justify-content-center pt-3">
                    <RSpinner />
                </div>}
            {!isLoading && <Form onSubmit={handleSubmit(handleSkillSubmit)} noValidate>
                {fields.map((field, i) => (
                    <Fragment key={i}>
                        <Row>
                            <Col xs={12} sm={12} md={5} lg={5} className="mb-2">
                                <Form.Group controlId="title">
                                    <Form.Label>Title <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`skill.${i}.title`)} type="text" placeholder="Enter first name" isInvalid={!!errors?.skill?.[i]?.title} />
                                    {!!errors?.skill?.[i]?.title && <Form.Control.Feedback type="invalid">{errors?.skill?.[i]?.title?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="star">
                                    <Form.Label>Star <span className="text-danger">*</span> </Form.Label>
                                    <ReactStars
                                        value={field.star ? parseInt(field.star) : 0}
                                        count={5}
                                        onChange={(d) => {
                                            setValue(`skill.${i}.star`, d);
                                        }}
                                        size={24}
                                        activeColor={"red"}
                                    />

                                    {!!errors?.skill?.[i]?.star && <small className="text-danger">{errors?.skill?.[i]?.star?.message}</small>}
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
                            append({ title: '', star: '' })
                        }
                    }} className="btn btn-sm btn-secondary" type="button">
                        <i className="fa fa-plus"></i> Add new skill
                    </button>
                </Form.Group>
                <Form.Group className="mb-3" controlId="middleName">
                    <button disabled={fields?.length < 1} type="submit" className="btn btn-secondary">Save</button>
                </Form.Group>
            </Form>}
        </RDetailsSection>
    </>)
}