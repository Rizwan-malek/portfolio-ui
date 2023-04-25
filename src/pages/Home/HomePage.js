import { useSelector } from "react-redux";
import { skills } from "./constant";
import RDetailsSection from '../../components/RDetailsSection';
import Container from '../../layouts/Container';
import { useNavigate } from "react-router-dom";


export default function HomePage() {
    const { theme } = useSelector(state => state.theme);
    const navigate = useNavigate();

    return (<>
        <Container className='pt-5 min-vh-100'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <div className="mb-2">
                        <button className="btn btn-sm btn-secondary">Create your own cv</button>
                        <button onClick={() => navigate("/auth")} className="btn btn-sm btn-secondary float-end">Login</button>
                    </div>
                    <RDetailsSection
                        title='Personal Details'
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
                        title='Contact Details'
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
                        title='Education'
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
                        title='Experience'
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
                        title='Skills'
                        className='mb-2'>
                        <div className='table-responsive'>
                            <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                                <thead>
                                    {skills.map((skill, i) => (
                                        <tr key={i}>
                                            <td>{skill.name}</td>
                                            <td>
                                                {[...Array(skill.star)].map((st, i) => (
                                                    <i key={i} className="fa fa-star"></i>
                                                ))}
                                            </td>
                                        </tr>
                                    ))}
                                </thead>
                            </table>
                        </div>
                    </RDetailsSection>
                    <RDetailsSection
                        title='Projects'
                        className='mb-2'>
                        <div className='table-responsive'>
                            <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                                <thead>
                                    <tr>
                                        <th>Sarkar E Rabbani (Text/Image/Article Upload Download)</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            Features & Functinalities
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>- Authentication</p>
                                            <p>- Role Based Access</p>
                                            <p>- Multiple File Upload</p>
                                            <p>- API Based System</p>
                                            <p>- Feedback System</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="btn btn-sm btn-secondary" href="">View project</a>
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </RDetailsSection>
                </div>
            </div>
        </Container>
    </>)
};