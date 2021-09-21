import React, { Component } from 'react';
import axios from 'axios';

class Body extends Component {

  state = {
    curtidas:{
      idCurtida: 0,
      ipCurtida: "",
      qtdeCurtidas: 1,
      brownser: "",
    }
  }

componentDidMount(){
  this.AtualizaContadorCurtidas();
}

 salvar = (curtidas) => {
     debugger;
    // curtidas.qtdeCurtidas = curtidas.qtdeCurtidas + 1
     let id = curtidas.idCurtida
     this.setState({ curtidas });
     axios.put('/Curtidas/'+ 'idCurtida?=' +curtidas.idCurtida, curtidas).then(response => {        
   })
 }

 AtualizaContadorCurtidas() {
    debugger;    
     axios.get('/api/Curtidas/TotalCurtidas').then(response => {
      debugger;
      const curtidas = response.data.data;      
      this.setState({qtdeCurtidas: curtidas });
    }).catch();
  }

render(){ return <main className="bd-masthead" id="content" role="main">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-6 mx-auto col-md-6 order-md-2">
                        <img className="img-fluid mb-3 mb-md-0" src="/docs/4.1/assets/img/bootstrap-stack.png" alt="" width="1024" height="860"></img>
                      </div>
                      <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
                        <h1 className="mb-3 bd-text-purple-bright">Artigo Rock content</h1>
                        <p className="lead  mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at ante turpis. Donec molestie, felis et congue semper, ante tortor fringilla risus, a sollicitudin magna libero sed mi. Nulla faucibus orci eu commodo maximus. Nam molestie varius lorem eu euismod. Sed ut pulvinar magna. Suspendisse consequat vulputate lacinia. Morbi condimentum sed lectus at cursus. Integer pharetra urna bibendum dui auctor, a feugiat dui molestie. Morbi pulvinar vestibulum velit sit amet hendrerit.
                        Nunc mi dui, condimentum ut laoreet nec, 
                        </p>
                        <p className="lead mb-4">
                        Donec molestie, felis et congue semper, ante tortor fringilla risus, a sollicitudin magna libero sed mi. Nulla faucibus orci eu commodo maximus. Nam molestie varius lorem eu euismod. Sed ut pulvinar magna. Suspendisse consequat vulputate lacinia. Morbi condimentum sed lectus at cursus. Integer pharetra urna bibendum dui auctor, a feugiat dui molestie. Morbi pulvinar vestibulum velit sit amet hendrerit.
                        </p>
                        <div className="d-flex flex-column flex-md-row lead mb-3">
                          <button onClick={()=> {this.salvar(this.state.qtdeCurtidas)}} className="btn btn-lg btn-bd-primary mb-3 mb-md-0 mr-md-3">Curtir</button>
                          <h3 className="btn btn-0 btn-bd-primary mb-0">{this.state.qtdeCurtidas}</h3>                         
                        </div>
                        <p className="text-muted mb-0">
                          Versão atual 4.1.3
                        </p>
                      </div>
                    </div>                          
                  </div>
            </main>
  }
} 
export default Body;
