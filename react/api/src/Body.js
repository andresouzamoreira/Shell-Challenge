import React, { Component } from 'react';
import axios from 'axios';
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzI5MTMzNjgsImV4cCI6MTYzMjkxNjk2OCwiaWF0IjoxNjMyOTEzMzY4LCJpc3MiOiJDaGFsbGVuZ2VTeXN0ZW0iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.OWJN9O9sgCcbXmNRLCrZG17x7s0y1JyxSnzFkym_zz8';
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
  debugger;  
  this.AtualizaContadorCurtidas();
}

 salvar = (curtidas) => {
     debugger;     
    // curtidas.qtdeCurtidas = curtidas.qtdeCurtidas + 1
     let id = curtidas.idCurtida
     this.setState({ curtidas });
     axios.post('api/Curtidas',{     
      TotalCurtidas: 1,      
      DataAtualizacao: '2021-09-22T00:39:39.136Z',    
      IdUsuario: 1
     },{ headers: {"Authorization" : `Bearer ${token}`} }).then(res =>
      {                 
        this.AtualizaContadorCurtidas();
        console.log(res.data)
      })
 }

 AtualizaContadorCurtidas() {
    debugger;    
     axios.get('/api/Curtidas/TotalCurtidas',{ headers: {"Authorization" : `Bearer ${token}`} }).then(response => {
      debugger;      
      const curtidas = response.data.data.value;      
      this.setState({qtdeCurtidas: curtidas });
    }).catch(
      function (error) {
        alert('Token inválido');
        return Promise.reject(error)
      });
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
