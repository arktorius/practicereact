import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'

import ringImage from '../assets/ark.png'
import work1 from '../assets/03Pr2.png'
import work2 from '../assets/05P.png'
import work3 from '../assets/06P.jpg'


class Cards extends React.Component{
render() {

    return <div>
        <CardDeck className ="bg-dark">
            <Card className ="bg-dark" >
                <Card.Img variant="top" src={work1} />
                <Card.Body className ="bg-dark">
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        additional content. This content is a little bit longer.
                        additional content. This content is a little bit longer.
                        additional content. This content is a little bit longer.
                        additional content. This content is a little bit longer.



        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">arktorius</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={work2} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
          content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={work3} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    </div>
}
}

export default Cards