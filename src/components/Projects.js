import { Container, Col, Tab, Nav, Row } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/dashboard-img1.jpg";
import projImg2 from "../assets/img/Lp-img2.jpg";
import projImg3 from "../assets/img/aluraBooks-img3.jpg";
import projImg4 from "../assets/img/Alura-LP.jpg";
import projImg5 from "../assets/img/AndreaLp.jpg";
import projImg6 from "../assets/img/Sunnyside-Lp.jpg";
import projImg7 from "../assets/img/pageNext.jpg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Projects = () => {

    const projectsTabOne = [
        {
            title: "Dashboard",
            description: "Dashboard interativo que analisa os smartphones mais vendidos usando dados do Kaggle, com visualização em tempo real via gráficos dinâmicos.",
            imgUrl: projImg1,
            url: "https://dashphones.vercel.app/"
        },
        {
            title: "Tamplate Grid",
            description: "Template moderno e responsivo para portfólios ou landing pages, com design clean e foco em usabilidade.",
            imgUrl: projImg2,
            url: "https://templategrid-theta.vercel.app/"
        },
        {
            title: "Alura Books",
            description: "Desenvolvimento de uma loja virtual de livros com ênfase em design responsivo, usabilidade, acessibilidade e navegação intuitiva.",
            imgUrl: projImg3,
            url: "https://alurabooksmf.vercel.app/"
        },
        {
            title: "Combo + Alura",
            description: "Landing page promocional do Combo+, destacando uma oferta especial da Alura: ao se inscrever em um dos cursos da plataforma, o usuário ganha acesso a um curso de inglês.",
            imgUrl: projImg4,
            url: "https://exemploalura.vercel.app/"
        },
        {
            title: "Andrea Drummont",
            description: "Landing page desenvolvida para apresentar o portfólio e os serviços de uma designer gráfica, com foco em identidade visual, responsividade e navegação intuitiva.",
            imgUrl: projImg5,
            url: "https://andrea-drummont.vercel.app/"
        },
        {
            title: "Sunnyside",
            description: "Landing page responsiva desenvolvida para a Sunnyside Agency, com foco em design visual impactante, performance e usabilidade",
            imgUrl: projImg6,
            url: "https://sunnyside-kappa-murex.vercel.app/"
        },   
    ];

    const projectsTabTwo = [
        {
            title: "Page Next",
            description: "Painel financeiro full-stack desenvolvido com Next.js, Tailwind CSS e PostgreSQL. Inclui autenticação, gerenciamento de faturas e interface responsiva. (Em Construção)",
            imgUrl: projImg7,
            url: "https://nextjs-dashboard-snowy-eight-21.vercel.app/"
        },
    ];
    

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h2>Projetos</h2>
                            <p>Aqui estão alguns dos projetos que desenvolvi com foco em soluções práticas, 
                                código limpo e boas práticas de desenvolvimento. Cada projeto reflete minha 
                                evolução como dev e meu compromisso com a entrega de valor real. Dê uma olhada!</p>
                            
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
                                                projectsTabOne.map((project, index) => {
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
                                    <Tab.Pane eventKey="second">
                                         <Row>
                                            {
                                                projectsTabTwo.map((project, index) => {
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
                                    <Tab.Pane eventKey="third"><p>Em breve</p></Tab.Pane>
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