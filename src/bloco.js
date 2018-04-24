import React, { Component } from 'react';

export default class Bloco extends React.Component {
    render() {
      return (
        <div className="bloco">
            <div className="textohover">
                <i className={this.props.icone}></i>
                <h2 className="textohover">{this.props.titulo}</h2>
            </div>
           <p>{this.props.texto}</p>
        </div>

      );
    }
  }