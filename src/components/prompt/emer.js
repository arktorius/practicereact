import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import imageM1 from '../assets/mermesinformatica/01.png'
import imageM2 from '../assets/mermesinformatica/02.gif'
import imageM3 from '../assets/mermesinformatica/03.jpg'
import imageM4 from '../assets/mermesinformatica/04.jpg'


class Emer extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {

    const modalStyles = {
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    return (
      <>
        <div className="principal ">
          <div className="secundario">
            <Button onClick={this.abrirModal} className="btn-dark">Memes</Button>

          </div></div>

        <Modal show={this.state.abierto} style={modalStyles}>
          <Modal.Header className="bg-dark text-light">
            Memes
        </Modal.Header>
          <Modal.Body className="bg-dark" >

            <img
              className="d-block  ml-auto mr-auto"
              width="387px"
              onClick={this.abrirModal}
              src={imageM1}
              alt="kimmeme"

            >
            </img> <hr/>

            <img
              className="d-block  ml-auto mr-auto"
              width="387px"
              onClick={this.abrirModal}
              src={imageM2}
              alt="pushmeme"

            >
            </img><hr/>

            <img
              className="d-block  ml-auto mr-auto"
              width="387px"
              src={imageM3}
              onClick={this.abrirModal}
              alt="homermeme"

            >
            </img><hr/>
            <img
              className="d-block  ml-auto mr-auto"
              width="387px"
              src={imageM4}
              onClick={this.abrirModal}
              alt="meme"

            >
            </img>
          </Modal.Body>

          <Modal.Footer className="bg-dark">
            <Button className="btn-light" onClick={this.abrirModal}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default Emer;