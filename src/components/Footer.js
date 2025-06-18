import { Container, Col, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/Nunes_Dev.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icon-git2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end align-self-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/matheus-ferreira36/" target="_blank"><img src={navIcon1} /></a>
                            <a href="https://github.com/nunes36" target="_blank"><img src={navIcon2} /></a>
                            <a href="https://www.instagram.com/nunes_developer" target="_blank"><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight &copy; 2025 Matheus Ferreira</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}