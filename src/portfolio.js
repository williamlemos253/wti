import React, { Component } from 'react';

export default class Portfolio extends React.Component {
    render() {
      return (
          <div className="portfolio">
             <a href={this.props.link}><img src={this.props.imagem} width="100%" alt={this.props.alt} /> </a>
          </div>

      );
    }
}