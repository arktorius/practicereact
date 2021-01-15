import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


import ProfilePicture from '../assets/profile.jpg'
import phoneImage from '../assets/iconos/tel.png'
import wpImage from '../assets/iconos/wp.png'
import tImage from '../assets/iconos/tg.png'
import lImage from '../assets/iconos/link.png'
import JImage from '../assets/iconos/jaba.png'
import jsImage from '../assets/iconos/js.png'
import mongoImage from '../assets/iconos/mongo.png'
import phpImage from '../assets/iconos/php.jpg'

class CurriculumVitae extends React.Component {

    render() {
        return <Container id="cvark" style={{ height: 720, marginTop: 0, padding: 0, color: 'white' }}>
            <br />
            <Row style={{ marginTop: 0 }}>
                <Col sm style={{ padding: 40 }}>
                    <h3 >Arturo Elmer Prado R.</h3>
                    <img
                        style={{ borderRadius: 150, marginTop: 50 }}
                        className="d-block ml-auto mr-auto"
                        height="300px"
                        src={ProfilePicture}
                        alt="profil" />
                    <br />

                    <ul>
                        <li>lunient@gmail.com</li>
                        <li><img src={phoneImage} width={20} alt="profil" />
                            <img src={wpImage} width={20} alt="profil" />
                            <img src={tImage} width={20} alt="profil" />
                         +34 722385895</li>
                        <li><a href="https://www.linkedin.com/in/arturo-elmer-prado-romero-b80432119/"><img src={lImage} width={20} alt="profil" /> </a>  linkedin</li>


                    </ul>
                    <br/>
                    <div className="container text-center" >
                        <img src={jsImage} height={40} className="bg-light" alt="profil" />
                        <img src={mongoImage} height={40} alt="profil" />
                        <img src={JImage} height={40} className="bg-light" alt="profil" />
                        <img src={phpImage} height={40} alt="profil" />
                    </div>

                </Col>
                <Col sm style={{ padding: 40 }}><h3>Experiencia </h3>

                    <p>
                        <ul>
                            <li><b>SCAE</b> (Sociedad Científica Albert Einstein)
                        <br />
                                <b>(2011-2014)</b><br></br>
                                <b>Cargo: Profesor Auxiliar</b><br />
                        Materias de Física, Matemáticas y afines.
                        Para los niveles de Pre-Universitario y
                        Universitario.</li>
                            <br />
                            <li>
                                <b>Frikis </b>(2015-2018)<br />
                                <b>
                                    Cargo: Informatico</b><br />
                        -Reparación de ordenadores personales.<br />
                        -Reparación de Celulares (Móviles).<br />
                        -Instalación y mantenimiento de cámaras de
                        seguridad.<br />
                        -Programación de Arduinos
                            </li>
                            <li>
                                <br />
                                <b>  PRAUS</b> (2016-2018) <br />
                                <b>Cargo: Profesor Auxiliar</b> <br />
                        Materias: Física, Algebra-Aritmética y
                        Geometría-Trigonometría, para Pre-Universitarios.
                            </li>
                        </ul>


                    </p>


                </Col>
                <Col sm style={{ marginBottom: 50, padding: 40 }}><h3>Formacion</h3>

                    <p>

                        <ul>
                            <li>
                                <b> <a href="https://cibernarium.barcelonactiva.cat/es/itacademy" style={{ color: 'white' }}>IT Academy</a></b>
                                <br />
                                <b>(2019-2020)</b>=>
                        Desarrollo Web Back/End.

                            </li><br />
                            <li> <b><a href="https://www.facebook.com/wegtron" style={{ color: 'white' }}>WEGTron</a></b>
                                <br />
                                <b>(2018)</b> =>
                        Curso Redes Industriales</li>
                            <li> <b><a href="http://www.umss.edu.bo/" style={{ color: 'white' }}>CESA-UMSS </a><br />
                            (2011)</b> =>
                        Linux Básico y Avanzado
                            </li>

                        </ul>


                    </p>



                </Col>
            </Row>
        </Container>
    }

}

export default CurriculumVitae