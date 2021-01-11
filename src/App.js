import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import Header from './components/header/header'
import Carusel from './components/carusel/carusel'
import Cards from './components/card/card'
import Footer from './components/footer/footer'


class App extends React.Component {
  
  
  render(){
  return (
    <React.Fragment>
      <Header/>
      <Carusel/>

      <Cards/>
      <Footer/>
    </React.Fragment>

  );
}
}

export default App;