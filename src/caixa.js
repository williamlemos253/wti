import React, { Component } from 'react';

export default class Caixa extends React.Component {
    render() {
      return (
        <div className="caixa">
            <img src={this.props.caixa} width="100%" alt={this.props.alt}/>
            <h3 className="textonaimagem">{this.props.titulo}</h3>
            <p className="textonaimagem">{this.props.descricao}</p>
        </div>

      );
    }
  }