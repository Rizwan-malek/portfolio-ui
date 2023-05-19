import { Card, Col, Row } from "react-bootstrap";
import { Fragment } from "react";
import { useEffect } from "react";
import templates from "../Constants/templates";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Templates() {
    document.title = "PORTFOLIO | TEMPLATES";
    const { theme } = useSelector(state => state.theme);
    const { route } = useSelector(state => state.portfolio);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
            <Row xs={1} md={2} className="g-3">
                {templates.map((_, idx) => (
                    <Col key={idx}>
                        <Card className={`${theme === 'dark' ? 'bg-white text-dark' : 'bg-dark text-white'}`}>
                            <Card.Header className="d-flex justify-content-between">
                                <Card.Title>
                                    {_.title}
                                </Card.Title>
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
                                <table className={`table table-bordered ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                                    <thead>
                                        <tr>
                                            <td className="align-middle text-center">Background</td>
                                            <td className="align-middle text-center">
                                                <input type="color" value={_.style.backgroundColor} disabled />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">Color</td>
                                            <td className="align-middle text-center">
                                                <input type="color" value={_.style.color} disabled />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">Font</td>
                                            <td className="align-middle text-center">
                                                {_.style.fontFamily}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle text-center">Font size</td>
                                            <td className="align-middle text-center">
                                                {_.style.fontSize}
                                            </td>

                                        </tr>
                                    </thead>
                                </table>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}