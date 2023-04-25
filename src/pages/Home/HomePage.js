import { useSelector } from "react-redux";
import { projects, skills } from "./constant";
import RDetailsSection from '../../components/RDetailsSection';
import Container from '../../layouts/Container';
import { Fragment } from "react";

let lastCount = 0;
const uniqueKey = (prefix = 'key') => {
    lastCount++;
    return `${prefix}${lastCount}`;
}

export default function HomePage() {
    const { theme } = useSelector(state => state.theme);
    return (<>
        <Container className='pt-2 min-vh-100'>
            <RDetailsSection
                title={<><i className="fa fa-user"></i>{" "}<strong>Personal Details</strong></>}
                className='mb-2'>
                <div className='table-responsive'>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <td>First Name</td>
                                <td>Rizwan</td>
                            </tr>
                            <tr>
                                <td>Middle Name</td>
                                <td>Salim</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>Malek</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>DOB</td>
                                <td>23/07/1999</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </RDetailsSection>
            <RDetailsSection
                title={<><i className="fas fa-address-card"></i>{" "}<strong>Contact Details</strong></>}
                className='mb-2'>
                <div className='table-responsive'>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <td>Email</td>
                                <td>malekrizwan08@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Contact Number</td>
                                <td>9974313362</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </RDetailsSection>
            <RDetailsSection
                title={<><i className="fas fa-graduation-cap"></i>{" "}<strong>Education</strong></>}
                className='mb-2'>
                <div className='table-responsive'>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <td>MCA (Master Of Computer Application)</td>
                                <td>9.00 CGPA | (1st Jan 2021 | 31st Dec 2022)</td>
                            </tr>
                            <tr>
                                <td>BCA (Bachelor Of Computer Application)</td>
                                <td>9.00 CGPA | (2018 | 2020)</td>
                            </tr>
                            <tr>
                                <td>12th Commerce</td>
                                <td>55% | (2017)</td>
                            </tr>
                            <tr>
                                <td>10th</td>
                                <td>47% | (2015)</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </RDetailsSection>
            <RDetailsSection
                title={<><i className="fa fa-history"></i>{" "}<strong>Experience</strong></>}
                className='mb-2'>
                <div className='table-responsive'>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <td>Narola Infotech Solution</td>
                                <td>1.5 Years</td>
                                <td>Software enginner</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </RDetailsSection>
            <RDetailsSection
                title={<><i className="fas fa-brain"></i>{" "}<strong>Skills</strong></>}
                className='mb-2'>
                <div className='table-responsive'>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            {skills.map((skill, i) => (
                                <tr key={uniqueKey('skill')}>
                                    <td>{skill.name}</td>
                                    <td>
                                        {[...Array(skill.star)].map((st, i) => (
                                            <i key={uniqueKey('sub-skill')} className="fa fa-star"></i>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </thead>
                    </table>
                </div>
            </RDetailsSection>
            <RDetailsSection
                title={<><i className="fas fa-project-diagram"></i>{" "}<strong>Projects</strong></>}
                className='mb-2'>
                <div className='table-responsive'>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            {projects.map((project, i) => (
                                <Fragment key={uniqueKey('project')}>
                                    <tr>
                                        <th>{project.title}</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            {project.subTitle}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            {project.features.map((feature, i) => (
                                                <p key={i}>- {feature}</p>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="btn btn-sm btn-secondary" href={project.projectURL}>View project</a>
                                        </td>
                                    </tr>
                                </Fragment>
                            ))}
                        </thead>
                    </table>
                </div>
            </RDetailsSection>
            <RDetailsSection
                title={<><i className="fa fa-trophy"></i>{" "}<strong>Achievements</strong></>}
                className='mb-2'>
                <div className='table-responsive'>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <th>Bachelor Of Computer Application (BCA)</th>
                            </tr>
                            <tr>
                                <td>Veer narmad south gujarat university</td>
                            </tr>
                            <tr>
                                <td>Secured 1st Rank In Every Year</td>
                            </tr>
                        </thead>
                    </table>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <th>Master Of Computer Application (MCA)</th>
                            </tr>
                            <tr>
                                <td>Gujarat Technological University</td>
                            </tr>
                            <tr>
                                <td>Top 10 In College</td>
                            </tr>
                        </thead>
                    </table>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <th>Mind Spark 2022 (Project Expo)</th>
                            </tr>
                            <tr>
                                <td>Bhagwan Mahavir College MCA</td>
                            </tr>
                            <tr>
                                <td>Secured 1st Rank</td>
                            </tr>
                        </thead>
                    </table>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <th>Mind Spark 2020 (Online Project Expo)</th>
                            </tr>
                            <tr>
                                <td>Bhagwan Mahavir College MCA</td>
                            </tr>
                            <tr>
                                <td>Secured 2nd Rank</td>
                            </tr>
                        </thead>
                    </table>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <th>Mind Spark 2019 (Competitive programming)</th>
                            </tr>
                            <tr>
                                <td>Bhagwan Mahavir College MCA</td>
                            </tr>
                            <tr>
                                <td>Secured 1st Rank</td>
                            </tr>
                        </thead>
                    </table>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <th>Mind Stormers 2019 (Competitive programming)</th>
                            </tr>
                            <tr>
                                <td>Udhna Citizen College</td>
                            </tr>
                            <tr>
                                <td>Secured 1st Rank</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </RDetailsSection>
        </Container>
    </>)
};