import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import Header from './components/header/header'
import Carusel from './components/carusel/carusel'
import Cards from './components/card/card'



class App extends React.Component {
  
  
  render(){
  return (
    <React.Fragment>
      <Header/>
      <Carusel/>

      <Cards/>
    </React.Fragment>

  );
}
}

export default App;