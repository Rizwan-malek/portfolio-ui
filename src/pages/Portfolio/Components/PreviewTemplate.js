import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, } from "react-bootstrap";
import templates from "../Constants/templates";

import titlesSection from "../Constants/titlesSection";

const fonts = [
    "Arial",
    "Times New Roman",
    "Verdana",
    "Helvetica",
    "Calibri",
    "Georgia",
    "Tahoma",
    "Comic Sans MS",
    "Impact",
    "Wingdings",
    "Brush Script MT",
    "Lucida Console",
    "Courier New",
];

export default function PreviewTemplate() {
    document.title = "PORTFOLIO | Preview";
    const { theme } = useSelector(state => state.theme);
    const { requestPayload } = useSelector(state => state.portfolio);
    const { template } = useParams();
    const { style } = templates[template];

    const [showDesignUI, setShowDesignUI] = useState(false);
    const [showSectionArrow, setShowSectionArrow] = useState(false);
    const [templateStyle, setTemplateStyle] = useState(style);

    return (
        <>
            {!requestPayload && <div className="alert alert-warning"><strong>Not entered details, Please filled details</strong></div>}
            {!showDesignUI && requestPayload &&
                <div className="text-end mb-2">
                    <button className="btn btn-sm btn-warning me-2" onClick={() => setShowSectionArrow(prev => !prev)}>
                        <i className="fa-solid fa-list-alt"></i> Rearrange section
                    </button>
                    <button className="btn btn-sm btn-info" onClick={() => setShowDesignUI(true)}>
                        <i className="fa-solid fa-wand-magic-sparkles"></i> Edit design
                    </button>
                </div>}
            {showDesignUI && requestPayload &&
                <div className="table-responsive">
                    <table className={`table table-hover table-bordered ${theme === 'dark' ? 'text-dark' : 'text-white'} ${theme === 'dark' ? 'bg-light' : 'bg-dark'}`}>
                        <thead>
                            <tr>
                                <td className="col-2 align-middle text-center">Background color</td>
                                <td className="col-4 align-middle text-center">
                                    <input type="color" value={templateStyle.backgroundColor} onChange={(e) => {
                                        setTemplateStyle(prev => ({ ...prev, backgroundColor: e.target.value }))
                                    }} />
                                </td>
                                <td className="col-2 align-middle text-center">Font color</td>
                                <td className="col-4 align-middle text-center">
                                    <input type="color" value={templateStyle.color} onChange={(e) => {
                                        setTemplateStyle(prev => ({ ...prev, color: e.target.value }))
                                    }} />
                                </td>
                            </tr>
                            <tr>
                                <td className="col-2 align-middle text-center">
                                    Font size <br />
                                    <small>(In pixel)</small>
                                </td>
                                <td className="col-4 align-middle text-center">
                                    <input type="number" className="form-control" value={templateStyle.fontSize} onChange={(e) => {
                                        setTemplateStyle(prev => ({ ...prev, fontSize: e.target.value }))
                                    }} />
                                </td>
                                <td className="col-2 align-middle text-center">Font type</td>
                                <td className="col-4 align-middle text-center">
                                    <select className="form-control" value={templateStyle.fontFamily} onChange={(e) => {
                                        setTemplateStyle(prev => ({ ...prev, fontFamily: e.target.value }))
                                    }}>
                                        {fonts.map((font, i) => <option key={i} value={font}>{font}</option>)}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-12 align-middle text-center" colSpan={4}>
                                    <button className="btn btn-sm btn-secondary" onClick={() => setShowDesignUI(false)}>
                                        <i className="fa fa-close"></i> Close editor
                                    </button>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>}

            {requestPayload && Object.keys(requestPayload).map((section, i) => {
                return (<Card style={{ ...templateStyle, fontSize: templateStyle.fontSize + 'px' }} key={i} className="mb-2 handle">
                    <Card.Header>
                        <div className="d-flex justify-content-between">
                            <div>
                                <i className={titlesSection[section]?.icon}></i> {titlesSection[section]?.title}
                            </div>
                            {showSectionArrow &&
                                <div className="d-flex gap-2">
                                    <i className="fa fa-arrow-down float-end" role="button"></i>
                                    <i className="fa fa-arrow-up float-end" role="button"></i>
                                </div>}
                        </div>
                    </Card.Header>
                    <Card.Body>
                    </Card.Body>
                </Card>
                )
            })}
            {requestPayload &&
                <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-info">
                        <i className="fa fa-cloud"></i> Save to cloud
                    </button>
                    <button className="btn btn-sm btn-warning">
                        <i className="fa fa-download"></i> Download
                    </button>
                </div>}
        </>
    )
}