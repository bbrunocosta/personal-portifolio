import React, { Fragment } from "react";
import FooterTwo from "../src/components/footers/footer"
import Helmet from "../src/components/commons/Helmet";
import CallAction from "../src/components/commons/callAction";
import Content2 from '../src/components/contents/content2'
import BackTop from '../src/components/commons/BackTop'
import menus from '../src/data/header-menus'
import Header from '../src/components/headers/header'
const PersonalPortfolio = ({ }) => {

  return (
    <Fragment>

      <Helmet pageTitle="Quem é" />
      <Header menus={menus} colorType="fixed-1"/>
      
      <div className="rn-blog-details pt--110 pb--0 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  <div className="blog-single-list-wrapper d-flex flex-wrap">
                    <div className="thumbnail">
                      <img className="w-100" src="/assets/bruno.jpg" alt="BLog Images" />
                      <span>Bruno Costa em pé vestindo uma camisa azul</span>
                    </div>
                    <div className="content">
                      <h3>Um pouquinho da minha história:</h3>
                      <p className='mb--0'>A mais ou menos um ano e meio atrás resolvi mudar completamente minha vida deixando para traz uma
                        carreira de 9 anos de muito sucesso no mercado da beleza para mudar completamente meu background.
                        Meu sonho? Trabalhar com tecnologia.
                        Eu já sabia que não seria nada fácil, eu aos 32 anos querer mudar de profissão e começar do zero em um mercado que eu ainda não atuei.
                        Barreiras de entrada?
                        Varias!
                        E aqui vão alguns alguns exemplos:
                      </p>
                      <ul className="list-style  mb--0" style={{padding:'20px'}}>
                        <li>Aprender várias tecnologias.</li>
                        <li>Criar um portfolio.</li>
                        <li>Conseguir uma empresa que te dê oportunidade mesmo sem ter nenhuma experiência.</li>
                      </ul>
                      <p>
                        Parece simples, mas só quem já teve que começar tudo de novo sabe quão desafiador é para alguém conseguir se manter e em plena pandemia, estudar
                        intensamente para conseguir alcançar o mínimo que o mercado exige para que você tenha uma oportunidade.
                        Nunca me deixei abater por pensar nas dificuldades pois sou consciente da minha dedicação e foco que todos os dias tenho colocado nesse sonho.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content2/>


      <CallAction 
        ask="Gostou do meu trabalho?"
        action="LET'S GET TO WORK"
        href="/contact" 
        hrefFor={'Entrar em contato'}
      />

      <FooterTwo />

      <BackTop/>
    </Fragment>
  )
}

export default PersonalPortfolio;