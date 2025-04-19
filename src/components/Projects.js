import { Container, Col, Tab, Nav, Row } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/dashboard-img1.jpg";
import projImg2 from "../assets/img/Lp-img2.jpg";
import projImg3 from "../assets/img/aluraBooks-img3.jpg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Projects = () => {

    const projects = [
        {
            title: "Dashboard",
            description: "Dashboard interativo que analisa os smartphones mais vendidos usando dados do Kaggle, com visualização em tempo real via gráficos dinâmicos.",
            imgUrl: projImg1,
        },
        {
            title: "Tamplate Grid",
            description: "Template moderno e responsivo para portfólios ou landing pages, com design clean e foco em usabilidade.",
            imgUrl: projImg2,
        },
        {
            title: "Alura Books",
            description: "Projeto baseado no curso da Alura, recriando uma loja virtual de livros com design responsivo, foco em acessibilidade e navegação intuitiva",
            imgUrl: projImg3,
        },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg4,
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg5,
        // },   
    ];
    

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Projects</h2>
                            <p>Descrição do projeto aqui.......................</p>
                            
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">tab one</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">tab two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">tab three</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInup" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectsCard 
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second"><p>Descrição</p></Tab.Pane>
                                    <Tab.Pane eventKey="third"><p>Descrição</p></Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
} 