import { useSelector } from "react-redux";
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

const routes = ["personal", "contact", "education", "experience", "skill", "project", "achievement", "certificate",];

const AddEditPage = () => {
    document.title = "PORTFOLIO | CREATE/EDIT";
    const { theme } = useSelector(state => state.theme);
    const navigate = useNavigate();
    const [routeCount, setRouteCount] = useState(0);

    const uniqueKey = useMemo(() => {
        let lastCount = 0;
        return (prefix = 'key') => {
            lastCount++;
            return `${prefix}${lastCount}`;
        }
    }, []);

    const handleRouteChange = useCallback(() => {
        navigate(routes[routeCount]);
    }, [navigate, routeCount]);
    useEffect(() => {
        handleRouteChange();
    }, [handleRouteChange]);

    const handlePortfolioCreateSubmit = () => {
        // code
    }

    return (
        <Container className='pt-2 min-vh-100'>
            <Suspense fallback={<div className="text-center"><RSpinner className={theme === 'dark' ? 'text-white' : 'text-dark'} /></div>}>
                <Routes>
                    <Route path="/personal" element={<PersonalDetails key={uniqueKey('personal')} />} />
                    <Route path="/contact" element={<ContactDetails key={uniqueKey('contact')} />} />
                    <Route path="/education" element={<EducationDetails key={uniqueKey('education')} />} />
                    <Route path="/experience" element={<ExperienceDetails key={uniqueKey('experience')} />} />
                    <Route path="/skill" element={<SkillDetails key={uniqueKey('skill')} />} />
                    <Route path="/project" element={<ProjectDetails key={uniqueKey('project')} />} />
                    <Route path="/achievement" element={<AchievementDetails key={uniqueKey('achievement')} />} />
                    <Route path="/certificate" element={<CertificateDetails key={uniqueKey('certificate')} />} />
                </Routes>
            </Suspense>
            <div className="mt-2">
                <button onClick={() => {
                    setRouteCount(prev => prev === 0 ? 0 : prev - 1);
                    handleRouteChange();
                }} className="btn btn-sm btn-secondary me-1">Previous</button>
                {(routes.length - 1) !== routeCount ?
                    <button onClick={() => {
                        setRouteCount(prev => prev === routes.length - 1 ? routes.length - 1 : prev + 1);
                        handleRouteChange();
                    }} className="btn btn-sm btn-secondary">Next</button>
                    :
                    <button onClick={handlePortfolioCreateSubmit} className="btn btn-sm btn-secondary">Submit And Create Portfolio</button>
                }
            </div>
        </Container>
    );
};

export default AddEditPage;