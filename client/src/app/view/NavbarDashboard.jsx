import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom"

const NavbarDashboard = () => {
	return (
		<Container>
			<Row>
				<Col>		
					<Nav justify activeKey="/dashboard" className="fs-2 p-3">
						<Nav.Item>
							<Nav.Link as={Link} to="/dashboard" >Home</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link eventKey="link-1">New</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to="/dashboard/search">Search</Nav.Link>
						</Nav.Item>
						
						<Nav.Item>
							<Nav.Link eventKey="disabled">Account</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>	
			</Row>
			<Row>
				<Col>
					<Outlet />
				</Col>
			</Row>

		</Container>
	);
}
export default NavbarDashboard;