import { Alert, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import cors from "cors";

export const Newsletter = ({ onValidated, subscribe, status, message }) => {
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (status === 'sucess') clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5} className="display-flex">
                        <h3>Assine nossa Newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit} >
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => 
                                    setEmail(e.target.value)} placeholder="Email Address" required/>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>

        </Col>
    )
}