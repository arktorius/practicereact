import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'

import work1 from '../assets/03Pr2.png'
import work2 from '../assets/05P.png'
import work3 from '../assets/06P.jpg'


class Cards extends React.Component {
    render() {

        return <div>
            <CardDeck >
                <Card className="bg-dark text-light">
                    <Card.Img variant="top" src={work1} />
                    <Card.Body >
                        <Card.Title>Acerca de:</Card.Title>
                        <Card.Text>
                            <p>  La tecnología siempre fue de mi interés, y siguiendo mis inquietudes me involucré en varias áreas de la misma, tales como: Electrónica, mecánica e informática.<br />
                            En informática me formé con cursos ofertados por Barcelona Activa, específicamente sobre el desarrollo WEB (BackEnd).</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">arktorius</small>
                    </Card.Footer>
                </Card>
                <Card className="bg-dark text-light">
                    <Card.Img variant="top" src={work2} />
                    <Card.Body>
                        <Card.Title>Objetivos</Card.Title>
                        <Card.Text>
                            <p>
                                A corto plazo: crecer como profesional, aprender y demostrar mis capacidades, tanto a nivel individual como en trabajo en equipo; así mejorar mis habilidades como desarrollador
                                 (tantas habilidades técnicas, como humanas).<br />
                                A mediano y largo plazo: Dirigir proyectos, propios y/o para terceros.
                            </p>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">arktorius</small>
                    </Card.Footer>
                </Card>
                <Card className="bg-dark text-light">
                    <Card.Img variant="top" src={work3} />
                    <Card.Body>
                        <Card.Title>Vision y Valores</Card.Title>
                        <Card.Text>
                            <p>
                                El aportar a la sociedad, con ideas y trabajo; en un acto de auto preservación.<br />
                                Pues cualquier mejora que se aporte repercutirá en nuestro estilo de vida futuro.
                            </p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">arktorius</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    }
}

export default Cards