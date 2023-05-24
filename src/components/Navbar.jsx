import { Container, Nav, Navbar } from 'react-bootstrap';

const Navbar1 = () => {
  return (
    <div>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">Handes Shop</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      </div>
  )
}

export default Navbar1