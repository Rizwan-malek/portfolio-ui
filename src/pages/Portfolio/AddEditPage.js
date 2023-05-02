import { useSelector } from "react-redux";
import RDetailsSection from '../../components/RDetailsSection';
import Container from '../../layouts/Container';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PersonalDetails from "./Components/PersonalDetails";
import { lazy, Suspense, useState } from "react";
import { useEffect } from "react";
import RSpinner from "../../components/RSpinner";

const ContactDetails = lazy(() => import("./Components/ContactDetails"));
const EducationDetails = lazy(() => import("./Components/EducationDetails"));
const ExperienceDetails = lazy(() => import("./Components/ExperienceDetails"));
const SkillDetails = lazy(() => import("./Components/SkillDetails"));
const ProjectDetails = lazy(() => import("./Components/ProjectDetails"));
const AchievementDetails = lazy(() => import("./Components/AchievementDetails"));
const CertificateDetails = lazy(() => import("./Components/CertificateDetails"));



let lastCount = 0;
const uniqueKey = (prefix = 'key') => {
    lastCount++;
    return `${prefix}${lastCount}`;
}
const routes = ["personal", "contact", "education", "experience", "skill", "project", "achievement", "certificate",];
export default function AddEditPage() {
    document.title = "PORTFOLIO | CREATE/EDIT";
    const { theme } = useSelector(state => state.theme);
    const navigate = useNavigate();
    const [routeCount, setRouteCount] = useState(0);

    useEffect(() => {
        navigate(routes[routeCount]);
    }, [routeCount]);

    return (<>
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
                </Routes>
            </Suspense>
            <div className="mt-2">
                <button onClick={() => {
                    setRouteCount(prev => prev === 0 ? 0 : prev - 1);
                }} className="btn btn-sm btn-secondary me-1">Previous</button>
                <button onClick={() => {
                    setRouteCount(prev => prev === routes.length - 1 ? routes.length - 1 : prev + 1);
                }} className="btn btn-sm btn-secondary">Next</button>
            </div>
        </Container>
    </>)
};