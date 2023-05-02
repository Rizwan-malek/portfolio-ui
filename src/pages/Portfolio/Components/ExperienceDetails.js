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

const yearOfExperienceOptions = ["0 to 1", "2 to 3", "4 to 5", "6 to 7", " 8 to 9", "10+"];
export default function ExperienceDetails() {
    document.title = "PORTFOLIO | experience DETAILS";

    const { isLoading, } = useSelector(state => state.auth);
    const { isLoading: isLoadingPortfolio, requestPayload } = useSelector(state => state.portfolio);
    const dispatch = useDispatch();

    const formValidationSchema = {
        companyName: Yup.string().required("Company name is required"),
        yearOfExperience: Yup.string().required("Year of experience is required"),
        businessRole: Yup.string().required("Business role is required"),
    };

    const schema = Yup.object({
        experience: Yup.array()
            .of(Yup.object().shape(formValidationSchema))
    });

    const { register, handleSubmit, formState: { errors }, control, reset, setValue } = useForm({
        resolver: yupResolver(schema),
    });
    const { fields, append, remove, } = useFieldArray({
        control,
        name: "experience",
    });

    useEffect(() => {
        if (requestPayload?.experienceDetails) {
            requestPayload?.experienceDetails?.experience?.forEach((detail) => {
                append(detail)
            })
        }
        return () => {
            reset();
        }
    }, [requestPayload]);

    const handleExperiencerSubmit = (data) => {
        dispatch(makingPortfolioPayload({ experienceDetails: data }));
    }
    return (<>
        <RDetailsSection
            title={<><i className="fa fa-history"></i>{" "}<strong>Experience details</strong></>}
            className='mt-2'>
            {isLoading &&
                <div className="d-flex justify-content-center pt-3">
                    <RSpinner />
                </div>}
            {!isLoading && <Form onSubmit={handleSubmit(handleExperiencerSubmit)} noValidate>
                {fields.map((field, i) => (
                    <Fragment key={i}>
                        <Row className="mb-2">
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="companyName">
                                    <Form.Label>Company name <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`experience.${i}.companyName`)} type="text" placeholder="Enter first name" isInvalid={!!errors?.experience?.[i]?.companyName} />
                                    {!!errors?.experience?.[i]?.companyName && <Form.Control.Feedback type="invalid">{errors?.experience?.[i]?.companyName?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5} className="mb-2">
                                <Form.Group controlId="experience">
                                    <Form.Label>Year of experience <span className="text-danger">*</span> </Form.Label>
                                    <Form.Select {...register(`experience.${i}.yearOfExperience`)} isInvalid={!!errors?.experience?.[i]?.yearOfExperience} >
                                        <option value={""}> Select </option>
                                        {yearOfExperienceOptions.map((year) => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </Form.Select>
                                    {!!errors?.experience?.[i]?.yearOfExperience && <Form.Control.Feedback type="invalid">{errors?.experience?.[i]?.yearOfExperience?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <Form.Group controlId="businessRole">
                                    <Form.Label>Business role <span className="text-danger">*</span> </Form.Label>
                                    <Form.Control {...register(`experience.${i}.businessRole`)} type="text" placeholder="Enter first name" isInvalid={!!errors?.experience?.[i]?.businessRole} />
                                    {!!errors?.experience?.[i]?.businessRole && <Form.Control.Feedback type="invalid">{errors?.experience?.[i]?.businessRole?.message}</Form.Control.Feedback>}
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={12} md={7} lg={7} className={"pt-3"}>
                                <Form.Group className="mb-3 d-flex justify-content-end" controlId="buttonGroup">
                                    <button onClick={() => remove(i)} type="button" className="btn btn-sm btn-secondary">
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
                            append({ companyName: '', yearOfExperience: '', businessRole: '' })
                        }
                    }} className="btn btn-sm btn-secondary">
                        <i className="fa fa-plus"></i> Add new experience
                    </button>
                </Form.Group>
                <Form.Group className="mb-3" controlId="middleName">
                    <button disabled={fields?.length < 1} type="submit" className="btn btn-secondary">Save</button>
                </Form.Group>
            </Form>}
        </RDetailsSection>
    </>)
}