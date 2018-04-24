import React, { Component } from 'react';

export default class Caixa extends React.Component {
    render() {
      return (
        <div className="caixa">
          <div className="fundoredondo">
            <i className="fas fa-bullseye fa-5x textocentralizado textovertical"></i>
          </div>
            <h3 className="gap">{this.props.titulo}</h3>
            <p>{this.props.descricao}</p>
          
        </div>

      );
    }
  }