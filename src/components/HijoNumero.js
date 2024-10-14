import React, { Component } from 'react'

class HijoNumero extends Component {
    sumar = () => {
        var numero = parseInt(this.props.numeroAleatorio)

        this.props.incrementarSuma(numero)
    }
  render() {
    return (
      <div>
        <h3 style={{color: "red"}}>Pulsa para sumar: </h3>
        <button onClick={this.sumar}>{this.props.numeroAleatorio}</button>
      </div>
    )
  }
}

export default HijoNumero