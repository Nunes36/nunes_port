import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/python.png";
import meter2 from "../assets/img/typescript.png";
import meter3 from "../assets/img/tailwind.png";
import meter4 from "../assets/img/javascript.png";
import meter5 from "../assets/img/react.png";
import meter6 from "../assets/img/nodejs.png";
import meter7 from "../assets/img/java.png";
import meter8 from "../assets/img/mysql.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Tenho experiência sólida em linguagens como Python, JavaScript (ES6+) e TypeScript, 
                                aplicando esses conhecimentos no desenvolvimento de aplicações web, APIs e soluções de 
                                análise de dados. No frontend, utilizo React e Next.js para criar interfaces modernas, 
                                responsivas e otimizadas, enquanto no backend trabalho com Node.js e Express, 
                                garantindo performance e escalabilidade. Tenho familiaridade com integração de bancos de dados 
                                como SQLite e MySQL Workbench, além de versionamento com Git e controle de projetos com
                                ferramentas como GitHub e Vercel.</p> 
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="image" />
                                    <h5>Python</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="image" />
                                    <h5>Typescript</h5>
                                </div>

                                <div className="item">
                                    <img src={meter3} alt="image" />
                                    <h5>Tailwind</h5>
                                </div>

                                <div className="item">
                                    <img src={meter4} alt="image" />
                                    <h5>Javascript</h5>
                                </div>

                                <div className="item">
                                    <img src={meter5} alt="image" />
                                    <h5>React</h5>
                                </div>

                                <div className="item">
                                    <img src={meter6} alt="image" />
                                    <h5>Node.Js</h5>
                                </div>

                                <div className="item">
                                    <img src={meter7} alt="image" />
                                    <h5>Java</h5>
                                </div>

                                <div className="item">
                                    <img src={meter8} alt="image" />
                                    <h5>MySQL</h5>
                                </div>
                            </Carousel>       
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      );
}