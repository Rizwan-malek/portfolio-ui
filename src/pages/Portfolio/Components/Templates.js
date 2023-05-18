import { Card, Col, Row } from "react-bootstrap";
import { Fragment } from "react";
import { useEffect } from "react";
import templates from "../Constants/templates";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Templates() {
    document.title = "PORTFOLIO | TEMPLATES";
    const { route, routes } = useSelector(state => state.portfolio);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log('route ==> ', route);

    return (
        <>
            <Row xs={1} md={2} className="g-3">
                {templates.map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    {_.title}</Card.Title>
                                <div className="float-end">
                                    <button onClick={() => {
                                        dispatch({ type: "CHANGE_ROUTE", payload: route + 1 })
                                        navigate(`/portfolio/create/preview/${idx}`);
                                    }} className="btn btn-sm btn-primary me-1">
                                        <i className="fa fa-eye"></i>
                                    </button>
                                    <button className="btn btn-sm btn-warning me-1">
                                        <i className="fa fa-download"></i>
                                    </button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}