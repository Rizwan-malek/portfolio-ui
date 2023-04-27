import { useSelector } from "react-redux";
import RDetailsSection from '../../components/RDetailsSection';
import Container from '../../layouts/Container';
import { Fragment } from "react";

let lastCount = 0;
const uniqueKey = (prefix = 'key') => {
    lastCount++;
    return `${prefix}${lastCount}`;
}
export default function AddEditPage() {
    document.title = "PORTFOLIO | CREATE/EDIT";
    const { theme } = useSelector(state => state.theme);
    return (<>
        <Container className='pt-2 min-vh-100'>
            <h1>PORTFOLIO ADD EDIT PAGE</h1>
        </Container>
    </>)
};