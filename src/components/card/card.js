import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'

import work1 from '../assets/03Pr2.png'
import work2 from '../assets/05P.png'
import work3 from '../assets/06P.jpg'


class Cards extends React.Component {
    render() {

        return <div>
            <CardDeck >
                <Card  className="bg-dark text-light">
                    <Card.Img variant="top" src={work1} />
                    <Card.Body >
                        <Card.Title>Acerca de:</Card.Title>
                        <Card.Text>
                            Soy de Bolivia, vivo en Barcelona desde el 2019.<br />
                    La tecnología siempre fue de mi interés, razón por la cual me involucre en varias áreas. <br />
                    Desde la electrónica, mecánica hasta la informática. En esta última, es hace no mucho, que me interese por la programación.
                    Ahora específicamente por el desarrollo WEB (actualmente en el BackEnd).

        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">arktorius</small>
                    </Card.Footer>
                </Card>
                <Card  className="bg-dark text-light">
                    <Card.Img variant="top" src={work2} />
                    <Card.Body>
                        <Card.Title>Objetivos</Card.Title>
                        <Card.Text>
                            A corto plazo: Participar en la mayor cantidad de proyectos que pueda, así mejorar mis habilidades como desarrollador (tanto habilidades técnicas, como humanas).<br/>
                            A mediano y largo plazo: Dirigir proyectos, propios y/o para terceros.

                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">arktorius</small>
                    </Card.Footer>
                </Card>
                <Card  className="bg-dark text-light">
                    <Card.Img variant="top" src={work3} />
                    <Card.Body>
                        <Card.Title>Vision y Valores</Card.Title>
                        <Card.Text>
                        El aportar a la sociedad, con ideas y trabajo.
                         Es un acto de auto preservación, puesto que, al formar parte de la misma; cualquier mejora que se aporte repercutirá en nuestro estilo de vida futuro.
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