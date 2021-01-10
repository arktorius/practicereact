import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Emer extends React.Component{
  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){

    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    return(
      <>
      <div className="principal">
        <div className="secundario">
      <Button color="success" onClick={this.abrirModal}>Mostrar Modal</Button>

      </div></div>

      <Modal show={this.state.abierto} style={modalStyles}>
        <Modal.Header>
          Iniciar Sesión
        </Modal.Header>
        <Modal.Body>
         <p>hello</p>
        </Modal.Body>

        <Modal.Footer>
            <Button color="primary">Iniciar Sesión</Button>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}

export default Emer;