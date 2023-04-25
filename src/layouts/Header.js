import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

function Header() {
    const { theme } = useSelector(state => state.theme);
    const navigate = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" bg={theme === 'dark' ? 'light' : 'dark'} variant={theme === 'dark' ? 'light' : 'dark'} className='mb-2' >
            <Container>
                <Navbar.Brand onClick={() => navigate("/")} role="button">PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link href="#features">Create Your Portfolio</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => navigate("/auth")}>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;