import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    } 

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Enviando...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Enviar");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200) {
            setStatus({ sucess: true, message: "Mensagem enviada com sucesso" });
        }else{
            setStatus({ sucess: false, message: "Algo deu errado, tente novamente mais tarde" })
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact us" />
                    </Col>
                    <Col md={6}>
                        <h2>Entre em contato</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Nome" 
                                    onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Sobrenome" 
                                    onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email" 
                                    onChange={(e) => onFormUpdate('email', e.target.value)} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    title="Digite um e-mail válido (ex: usuario@dominio.com)"/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Telefone" 
                                    onChange={(e) => onFormUpdate('phone', e.target.value)} required pattern="^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$"
                                    title="Digite um telefone válido, como (11) 91234-5678"/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <textarea rows="6" value={formDetails.message} placeholder="Mensagem"
                                    onChange={(e) => onFormUpdate('message', e.target.value)} required/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                <Col>
                                    {
                                        status.message &&
                                        <Col>
                                        <p className={status.sucess === false ? "danger" : "sucess"}>{status.message}</p>
                                        </Col>
                                    }
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}