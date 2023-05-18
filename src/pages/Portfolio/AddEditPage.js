import { useDispatch, useSelector } from "react-redux";
import Container from '../../layouts/Container';
import { Route, Routes, useNavigate } from "react-router-dom";
import { lazy, Suspense, useState, useMemo, useCallback } from "react";
import { useEffect } from "react";
import RSpinner from "../../components/RSpinner";

const PersonalDetails = lazy(() => import("./Components/PersonalDetails"));
const ContactDetails = lazy(() => import("./Components/ContactDetails"));
const EducationDetails = lazy(() => import("./Components/EducationDetails"));
const ExperienceDetails = lazy(() => import("./Components/ExperienceDetails"));
const SkillDetails = lazy(() => import("./Components/SkillDetails"));
const ProjectDetails = lazy(() => import("./Components/ProjectDetails"));
const AchievementDetails = lazy(() => import("./Components/AchievementDetails"));
const CertificateDetails = lazy(() => import("./Components/CertificateDetails"));
const Templates = lazy(() => import("./Components/Templates"));
const PreviewTemplate = lazy(() => import("./Components/PreviewTemplate"));

// const routes = ["personal", "contact", "education", "experience", "skill", "project", "achievement", "certificate", "templates"];

const AddEditPage = () => {
    document.title = "PORTFOLIO | CREATE/EDIT";
    const { theme } = useSelector(state => state.theme);
    const { route, routes } = useSelector(state => state.portfolio);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [routeCount, setRouteCount] = useState(0);

    const handleRouteChange = useCallback(() => {
        navigate(routes[route]);
    }, [route]);

    useEffect(() => {
        handleRouteChange();
    }, [handleRouteChange]);

    const handlePortfolioCreateSubmit = () => {
        // code
    }
    console.log('route ==> ', route);
    // console.log('routes ==> ', routes);

    return (
        <Container className='pt-2 min-vh-100'>
            <Suspense fallback={<div className="text-center"><RSpinner className={theme === 'dark' ? 'text-white' : 'text-dark'} /></div>}>
                <Routes>
                    <Route path="/personal" element={<PersonalDetails />} />
                    <Route path="/contact" element={<ContactDetails />} />
                    <Route path="/education" element={<EducationDetails />} />
                    <Route path="/experience" element={<ExperienceDetails />} />
                    <Route path="/skill" element={<SkillDetails />} />
                    <Route path="/project" element={<ProjectDetails />} />
                    <Route path="/achievement" element={<AchievementDetails />} />
                    <Route path="/certificate" element={<CertificateDetails />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/preview/:template" element={<PreviewTemplate />} />
                </Routes>
            </Suspense>
            <div className="mt-2">
                <button onClick={() => {
                    // setRouteCount(prev => prev === 0 ? 0 : prev - 1);
                    dispatch({ type: "CHANGE_ROUTE", payload: route === 0 ? 0 : route - 1 })
                    // handleRouteChange();
                }} className="btn btn-sm btn-secondary me-1">Previous</button>
                {((routes.length - 1) !== route) && ((routes.length) !== route) ?
                    <button onClick={() => {
                        dispatch({ type: "CHANGE_ROUTE", payload: route === routes?.length - 1 ? routes?.length - 1 : route + 1 })
                        // setRouteCount(prev => prev === routes.length - 1 ? routes.length - 1 : prev + 1);
                        // handleRouteChange();
                    }} className="btn btn-sm btn-secondary">Next</button>
                    : ""}
            </div>
        </Container>
    );
};

export default AddEditPage;