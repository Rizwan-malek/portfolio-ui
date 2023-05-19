import { useDispatch, useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { authUserLogout } from "../redux/api/auth";
import { NavDropdown } from "react-bootstrap";

function Header() {
    const { theme } = useSelector(state => state.theme);
    const { token } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" bg={theme === 'dark' ? 'light' : 'dark'} variant={theme === 'dark' ? 'light' : 'dark'} className='mb-2' >
            <Container>
                <Navbar.Brand onClick={() => navigate("/")} role="button">
                    <i className="fa fa-briefcase"></i> PORTFOLIO
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>
                            <i className="fa fa-home"></i> Home
                        </Nav.Link>
                        <Nav.Link onClick={() => {
                            dispatch({
                                type: "CHANGE_ROUTE",
                                payload: 0
                            })
                            navigate("/portfolio/create/personal")
                        }}>
                            <i className="fa fa-plus"></i> Create Portfolio
                        </Nav.Link>
                        <Nav.Link onClick={() => navigate("/portfolio")}>
                            <i className="fa fa-history"></i> Portfolio History
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {token ?
                            <NavDropdown title={<><i className="fa fa-cog"></i> Settigns</>} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => navigate("/auth/profile")}>
                                    <i className="fa fa-user"></i> Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/auth/change-password")}>
                                    <i className="fa fa-key"></i> Change password
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => dispatch(authUserLogout(null, () => navigate("/auth")))}>
                                    <i className="fa fa-sign-out"></i> Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                            : <Nav.Link onClick={() => {
                                navigate("/auth")
                            }}>
                                <i className="fa fa-sign-in"></i> Login
                            </Nav.Link>}
                        {/* <Nav.Link onClick={() => {
                            if (token) {
                                dispatch(authUserLogout(null, () => {
                                    navigate("/auth");
                                }))
                            } else {
                                navigate("/auth")
                            }
                        }}>
                            {token ? <>
                                <i className="fa fa-sign-out"></i> Logout
                            </> : <>
                                <i className="fa fa-sign-in"></i> Login
                            </>}
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;