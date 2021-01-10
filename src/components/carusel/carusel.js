import React from 'react'
import { Carousel } from 'react-bootstrap';


import imageTest from '../assets/011.gif'
import Emer from '../prompt/emer'



class Carusel extends React.Component {


    render() {
        return <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-50 ml-auto mr-auto"

                    src={imageTest}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Emer />
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50 ml-auto mr-auto"

                    src={imageTest}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-50 ml-auto mr-auto"
                    src={imageTest}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    }
}

export default Carusel