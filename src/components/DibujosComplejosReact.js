import React, { Component } from 'react'

class DibujosComplejosReact extends Component {
    //EN STATE TENDREMOS UN CONJUNTO DE NOMBRES
    state = {
        nombres: ["Lucia", "Daniel", "Antonia", "Diana", "Fermín"]
    }
    
    generarNombre = () => {
        this.state.nombres.push("NUEVO NOMBRE");
        //ACTUALIZAMOS STATE
        this.setState({
            nombres: this.state.nombres
        })
    }
  render() {
    return (
      <div>
        <h1>Dibujos Complejos React Collection</h1>
        <button onClick={() => this.generarNombre()}>
            Generar nombre
        </button>
        {
            //ESTO ES CODIGO REACT, ES DIFERENTE AL CODIGO JS
            //ES CODIGO LOGICO CON SINTAXIS JSX
            //EL CODIGO LOGICO DEBE CONTENER UN RETURN
            this.state.nombres.map( (object, index) => {
                //ESTE CODIGO NUNCA DEBE ESTAR VACIO, SIEMPRE
                //TIENE QUE DEVOLVER UN return
                return(
                    <h1 key={index} style={{color: "blue"}}>{object}</h1>
                )
            })
        }
      </div>
    )
  }
}

export default DibujosComplejosReact