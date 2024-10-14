import React, { Component } from 'react'
import HijoNumero from './HijoNumero';

class PadreNumeros extends Component {

    state = {
        suma: 0,
        numeros: []
    }

    dibujarNumeros = () => {
        for (var i = 1; i <= 7; i++) {
            this.state.numeros.push(parseInt(Math.random() * 100) + 1);
        }
    }

    nuevoNumero = () => {
        this.state.numeros.push(parseInt(Math.random() * 100) + 1);

        this.setState({
            numeros: this.state.numeros
        })
    }
    incrementarSuma = (numero) => {
        this.setState({
            suma: this.state.suma + numero
        })
    }
  render() {
    return (
      <div>
        <h1 style={{color: "blue"}}>Padre Numeros</h1>  
        <button onClick={this.nuevoNumero}>Nuevo número</button>
        <h1>Total: {this.state.suma}</h1>   
        {
            this.state.numeros.map((numero, index) => {
                return (
                    <HijoNumero numeroAleatorio={numero} key={index} incrementarSuma={this.incrementarSuma}/>
                )
            })
        }
      </div>
    )
  }
}

export default PadreNumeros