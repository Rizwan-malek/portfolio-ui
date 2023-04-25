import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';


export default function RDetailsSection({
    title = "",
    className = "",
    children
}) {
    const { theme } = useSelector(state => state.theme);
    return (
        <Card className={`${theme === 'dark' ? 'bg-white text-dark' : 'bg-dark text-white'} ${className}`}>
            <Card.Header>
                {title}
                {/* <i className="fa fa-pen"></i>{" "}
                <strong>{title}</strong> */}
            </Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    )
}
