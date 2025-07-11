import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/profile.jpg";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front-End", "Back-End", "Fullstack"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let safeText = text || '';
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(400);
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                                <span className="tagline">Bem-vindo ao meu portfólio</span>
                                <h1>{`Olá, sou Matheus Ferreira Desenvolvedor `}<span className="wrap">{text}</span></h1>
                                <p>Transformando ideias em soluções que geram valor e resultados reais para negócios e pessoas
                                   através da programação.</p>
                                <a href="https://wa.me/5511969312954" target="_blank"><button onClick={() => console.log('connect')}>Vamos Conversar<ArrowRightCircle size={25}/></button></a>
                            </div>}    
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} alt="header-img" />
                            </div>}
                        </TrackVisibility>    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}