import { useSelector } from "react-redux"
import Container from "../layouts/Container";

export function PrivateRoute({ children }) {
    const { token } = useSelector(state => state.auth);
    return token ? children : <Container className='pt-2 min-vh-100'>
        <div className="alert alert-warning">
            <strong>
                <i className="fa fa-warning"></i> Unauthorized access, You need to login first
            </strong>
        </div>
    </Container>
}
// export function PrivateRoute({ children }) {
//     const { token } = useSelector(state => state.auth);
//     return children
// }

export function PublicRoute({ children }) {
    return children
}