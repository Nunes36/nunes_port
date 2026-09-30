import { Container, Col, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/logosite2.png";
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
                            <a href="https://www.linkedin.com/in/matheus-ferreira36/" target="_blank" without rel="noopener noreferrer"><img src={navIcon1} alt="icone linkedin" /></a>
                            <a href="https://github.com/nunes36" target="_blank" without rel="noopener noreferrer"><img src={navIcon2} alt="icone github" /></a>
                            <a href="https://www.instagram.com/nunes_developer" target="_blank" without rel="noopener noreferrer"><img src={navIcon3} alt="icone instagram" /></a>
                        </div>
                        <p>CopyRight &copy; 2025 Matheus Ferreira</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}