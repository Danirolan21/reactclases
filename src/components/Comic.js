import React, { Component } from 'react'

class Comic extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.comic.titulo}</h1>
        <p>{this.props.comic.descripcion}</p>
        <img src={this.props.comic.imagen}
        style={{width: "100px", height: "150px"}}/>
        <button onClick={ () => {
            this.props.seleccionarFavorito(this.props.comic);
        }} style={{backgroundColor: "black", color: "white"}}>
            Favorito <span style={{color: "yellow"}}>★</span>
        </button>
        <button onClick={ () => {
            this.props.eliminarComic(this.props.position);
        }}>
            Eliminar Comic 
        </button>
      </div>
    )
  }
}

export default Comic