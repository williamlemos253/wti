import React, { Component } from 'react';
import logo from './imagens/logo.svg';
import './App.css';
import portfolio1 from './imagens/portfolio_exito-min.png'
import portfolio2 from './imagens/portfolio_exito_td-min.png'
import portfolio3 from './imagens/portfolio_acima_saude-min.png'
import portfolio4 from './imagens/portfolio_abrassi-min.png'

import Caixa from './caixa'


import Portfolio from './portfolio'

import Bloco from './bloco.js'




class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header" id="topo">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="menucontainer">
              <a href="#contato2" className="menu"><b>Contato</b></a>
              <a href="#solucoes" className="menu"><b>Soluções</b></a>
              <a href="#criacaodesites" className="menu"><b>Criação de Sites</b></a>
              <a href="#home" className="menu"><b>Home</b></a>
            </div>
          </header>
                  
          <hr />

          <div className="flex-container2">
            <Caixa titulo="Criação de Sites"/>   
            <Caixa titulo="SEO"/>
            <Caixa titulo="teste"/>      
          </div>

          <h1 className="textocentralizado" id="criacaodesites">Como é o nosso processo de desenvolvimento? </h1>
          <p className="textocentralizado">Trabalhamos com o mesmo processo criativo das melhores agências</p>
          <p>&nbsp;</p>
          <div className="flex-container">
            <Bloco icone="fas fa-paint-brush fa-3x  textocentralizado" titulo="Briefing" texto="Coleta do material (logomarca) e informações sobre a empresa, segmento de atuação e o público  alvo, para isso será preciso que o contratante nos responda algumas perguntas." />
            <Bloco icone="fas fa-pencil-alt fa-3x  textocentralizado" titulo="Production" texto="Criação do layout baseado nas informações coletadas, e envio para aprovação caso não seja aprovado, vamos conversar e ver o que precisa mudar até que a gente chegue em  um denominador comum." />
            <Bloco icone="fas fa-magic fa-3x  textocentralizado" titulo="Delivery" texto=" Com o layout aprovado partimos para entrega e finalização do pagamento." />
            <Bloco icone="far fa-clipboard fa-3x  textocentralizado textohover" titulo="Coaching" texto="Nosso trabalho envolve a criação de sites profissionais, exclusivos e gerenciáveis. Além disso, te daremos o treinamento e suporte completo para aprender como gerenciar seu site." />
          </div>

          <hr/>         
          <h1 className="textocentralizado">Conheça alguns dos nossos trabalhos</h1>
         
          <div className="flex-container" id="portfolio">
            <Portfolio  imagem={portfolio1} link="https://escolaexito.com.br"  alt="Colégio Êxito"/>
            <Portfolio  imagem={portfolio2} link="https://exitotd.com.br" alt="Êxito treinamento e desenvolvimento"/>
            <Portfolio  imagem={portfolio3} link="https://acimasaude.com.br" alt="Acima Saúde"/>
            <Portfolio  imagem={portfolio4} link="https://abrassi.org.br" alt="Abrassi" />
          </div>

          <hr/>

          <h1 className="textocentralizado" id="solucoes">Com o que trabalhamos?</h1>


          <div className="flex-container">
          <Bloco icone="fab fa-wordpress fa-3x  textocentralizado" titulo="Wordpress" texto="WordPress é um aplicativo de sistema de gerenciamento de conteúdo para web, escrito em PHP com banco de dados MySQL, voltado principalmente para a criação de sites e blogs via web. Essa é uma das ferramentas mais famosas na criação de blogs disputando diretamente com o serviço do Google chamado Blogger. No entanto, o WordPress é adotado por aqueles que queiram um site mais profissional e com maiores recursos diferenciais." />
          <Bloco icone="fab fa-python fa-3x  textocentralizado" titulo="Python" texto="Python é uma linguagem de programação poderosa e fácil de aprender. Ele possui estruturas de dados eficientes de alto nível e uma abordagem simples, mas eficaz, para programação orientada a objetos. A sintaxe elegante e a digitação dinâmica do Python, junto com sua natureza interpretada, tornam-no uma linguagem ideal para scripts e desenvolvimento rápido de aplicativos em muitas áreas na maioria das plataformas.." />
          <Bloco icone="fab fa-js fa-3x  textocentralizado" titulo="JavaScript" texto="É atualmente a principal linguagem para programação client-side em navegadores web. Começa também a ser bastante utilizada do lado do servidor através de ambientes como o node.js. Foi concebida para ser uma linguagem script com orientação a objetos baseada em protótipos, tipagem fraca e dinâmica e funções de primeira classe. Possui suporte à programação funcional e apresenta recursos como fechamentos e funções de alta ordem comumente indisponíveis em linguagens populares como Java e C++. É a linguagem de programação mais utilizada do mundo" />

          </div>

  

    <footer>
        <div className="footer">
            <p className="textocentralizado branco">Copyright 2018 - WTI  <a href="#topo" className="branco textoadireita textohover" title="Ir ao topo"><i className="far fa-hand-point-up fa-3x"></i></a> </p> 
        </div>
      
    </footer>
          

          

            
      </div>
      
    );
  }
}

export default App;
