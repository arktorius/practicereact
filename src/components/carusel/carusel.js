import React from 'react'
import { Carousel } from 'react-bootstrap';

import Image from '../assets/image'

import imageTest from '../assets/ark.png'
import Emer from '../prompt/emer'



class Carusel extends React.Component {


    render() {
        return <Carousel style={{ marginTop: 50 }}>
            <Carousel.Item>
                <img
                    className="d-block  ml-auto mr-auto"
                    height="450px"
                    src={Image.img1}
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
                    className="d-block ml-auto mr-auto"
                    height="450px"

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
                    className="d-block ml-auto mr-auto"
                    height="450px"

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