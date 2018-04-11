import React, { Component } from 'react';
import logo from './imagens/logo.svg';
import tablet from './imagens/tablet.png'
import './App.css';
import Caixa from './caixa'
import Caixa1 from './imagens/caixa_1.svg'
import Caixa2 from './imagens/caixa_2.svg'
import Caixa3 from './imagens/caixa_3.svg'
import portfolio1 from './imagens/portfolio_exito-min.png'
import portfolio2 from './imagens/portfolio_exito_td-min.png'
import portfolio3 from './imagens/portfolio_acima_saude-min.png'
import portfolio4 from './imagens/portfolio_abrassi-min.png'

import linhaportfolio from './imagens/linha_portfolio.svg' 

import Portfolio from './portfolio'




const textocaixa1 = "Moldados para computador, tablet e celular"


class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="menucontainer">
              <a href="#contato2" className="menu">Contato</a>
              <a href="#solucoes" className="menu">Soluções</a>
              <a href="#criacaodesites" className="menu">Criação de Sites</a>
              <a href="#home" className="menu">Home</a>
            </div>
          </header>
          <hr />
          <div className="row" id="home">
            
                <center><h2 className="fadein">Criação de Sites
                Responsivos e Gerenciáveis</h2></center>

                  &nbsp;

                <p className="fadein">Sites responsivos se ajustam ao tamanho da tela do dispositivo do usuário (PC, celular, tablet, etc) 
                  automaticamente fornecendo sempre um tamanho de fonte legível.

                  Um site responsivo muda a sua aparência e disposição com base no tamanho da tela em que o site é exibido. 
                  Então, se o usuário tem uma tela pequena, os elementos se reorganizam para lhe mostrar tudo de uma forma visualmente 
                  agradável ao formato da tela.

                </p>
                 
                <center><img src={tablet} width="50%" className="fadein" alt="criação de sites responsivos e gerenciáveis"/></center>
          
          </div>
          <hr/>
          <div className="flex-container" id="criacaodesites">
            <Caixa titulo="Sites Responsivos" descricao={textocaixa1} caixa={Caixa1}  alt="sites responsivos"/>
            <Caixa titulo="Lojas Virtuais " descricao="Divulgue seu produto na internet. Desenvolvemos do seu jeito" caixa={Caixa2}  alt="lojas virtuais"/>
            <Caixa titulo="Sites Gerenciáveis" descricao="Você mesmo poderá gerenciar e atualizar o conteúdo do seu site" caixa={Caixa3}  alt="sites gerenciáveis"/>
          </div>


          <h1>Portfólio <img src={linhaportfolio} width="40%" alt="portfólio"/> </h1>

          <div className="flex-container" id="portfolio">
            <Portfolio  imagem={portfolio1} link="https://escolaexito.com.br"  alt="Colégio Êxito"/>
            <Portfolio  imagem={portfolio2} link="https://exitotd.com.br" alt="Êxito treinamento e desenvolvimento"/>
            <Portfolio  imagem={portfolio3} link="https://acimasaude.com.br" alt="Acima Saúde"/>
            <Portfolio  imagem={portfolio4} link="https://abrassi.org.br" alt="Abrassi" />
          </div>

          <div id="contato2"></div>
            
        
          



            
      </div>

    );
  }
}

export default App;
