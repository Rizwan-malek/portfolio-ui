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
            <h1>PORTFOLIO LIST PAGE</h1>
        </Container>
    </>)
};