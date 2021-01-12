import React from 'react'
import { Carousel } from 'react-bootstrap';

import SpringIamge from '../assets/02S.png'
import JsImage from '../assets/01E.png'
import JavaImage from '../assets/08J.png'




class Carusel extends React.Component {


    render() {
        return <Carousel style={{ marginTop: 50 }}>
            <Carousel.Item>
                <img
                    className="d-block  ml-auto mr-auto"
                    height="400px"
                    src={SpringIamge}
                    alt="SpringSlide"
                />
                <Carousel.Caption>
                    <h3><a href="https://github.com/arktorius/DicesGame" style={{color:'white'}}>ejemplo</a></h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block ml-auto mr-auto"
                    height="400px"

                    src={JsImage}
                    alt="JsSlide"
                />

                <Carousel.Caption>
                <h3><a href="https://github.com/arktorius/Express-MongoDb-API-REST" style={{color:'white'}}>ejemplo</a></h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block ml-auto mr-auto"
                    height="400px"

                    src={JavaImage}
                    alt="javaSlide"
                />

                <Carousel.Caption>
                <h3><a href="https://github.com/arktorius/DicesGame" style={{color:'white'}}>ejemplo</a></h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    }
}

export default Carusel