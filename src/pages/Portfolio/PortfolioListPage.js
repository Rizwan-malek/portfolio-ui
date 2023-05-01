import { useSelector } from "react-redux";
import RDetailsSection from '../../components/RDetailsSection';
import Container from '../../layouts/Container';
import { Fragment } from "react";

let lastCount = 0;
const uniqueKey = (prefix = 'key') => {
    lastCount++;
    return `${prefix}${lastCount}`;
}
export default function PortfolioListPage() {
    document.title = "PORTFOLIO | LIST";
    const { theme } = useSelector(state => state.theme);
    return (<>
        <Container className='pt-2 min-vh-100'>
            <RDetailsSection
                title={<><i className="fa fa-history"></i>{" "}<strong>History</strong></>}
                className='mt-2'>
                <div className='table-responsive'>
                    <table className={`table ${theme === 'dark' ? 'text-dark' : 'text-white'}`}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <td>1</td>
                                <td>Test</td>
                                <td>test@gmail.com</td>
                                <td>23/09/2022</td>
                                <td>
                                    <div className="d-flex gap-1">
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="fa fa-eye"></i> View
                                        </button>
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="fa fa-download"></i> Download
                                        </button>
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="fa fa-pen"></i> Edit
                                        </button>
                                        <button className="btn btn-sm btn-secondary">
                                            <i className="fa fa-trash"></i> Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </RDetailsSection>
        </Container>
    </>)
};