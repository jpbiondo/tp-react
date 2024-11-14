import { Container, Navbar } from "react-bootstrap";
import logo from '../../../assets/logo.png';
export const HeaderProduct = () => {
    return (
        <>
        <Navbar bg="dark">
          <Container fluid> 
            <Navbar.Brand href="#home">
            <img
              alt="SaleBurguer"
              src={logo}
              height="50"
              className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
          </Container>
        </Navbar>
        </>

    );
}