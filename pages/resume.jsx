import React from 'react'
import Link from 'next/link'
import Helmet from "../src/components/commons/Helmet";

const Curriculo = () => ( 
    <article className="Curriculum">
        <Helmet pageTitle="Curriculo"/>
        <div id="coverImage">
            <img src="https://www.notion.so/images/page-cover/nasa_earth_grid.jpg" alt="Cover"/>
        </div>

    <content>
        
        <div className="title">
            <div className='h1'>
                <h1 className="name">Bruno </h1>
                <h1 className="name">Costa Borges</h1>
            </div>
            <img className="avatar" src="/assets/bruno.png" alt="Avatar"/>
        </div>
        <div className="page-body">
            <p  className=""></p>
            <p  className="">business.brunocosta@gmail.com</p>
            <p  className="">São Paulo - SP</p>
            <p  className="">+55 (11) 95996-3068</p>
            <h3 className="">Idiomas </h3>    
            <p  className="idioma"><b>Inglês</b>  - Conversação nível intermediário/avançado</p> 
            <p  className="idioma"><b>Português</b> - Nativo</p>
            <h3 className="">Tecnologias</h3>
            <p  className="">JavaScript&emsp;|&emsp;TypeScript&emsp;|&emsp;NodeJS&emsp;|&emsp;Git&emsp;|&emsp;MongoDB&emsp;</p>
            <p  className="">ReactJS&emsp;&emsp;|&emsp; NextJS  &emsp;&emsp;| &emsp; HTML &emsp;|&emsp;CSS &nbsp;|&emsp;PowerBI&emsp;</p>
            <h3 className="">Escolaridade</h3>
            <p  className="">Cursando 1º período de Engenharia da Computação</p>
            <h3 className="">Portifólio</h3>
            <Link className="ProjectLink" href="/">
                <span className="portifolio">
                <p><small>Clean-Node-API  - https://github.com/bbrunocosta/clean-node-api</small></p>
                </span>
            </Link>
            <Link className="ProjectLink" href="/rgb-selector">
                <span className="portifolio">
                <p><small>YouTube Clone - https://github.com/bbrunocosta/coutube-clone</small></p>
                </span>
            </Link>
            <Link className="ProjectLink" href="/youtube">
                <span className="portifolio">
                <p><small>Touch Calculator - https://github.com/bbrunocosta/calculator</small></p>
                </span>
            </Link>
            <Link className="ProjectLink" href="/youtube">
                <span className="portifolio">
                <p><small>RGB Selector - https://github.com/bbrunocosta/rgb-selector</small></p>
                </span>
            </Link>

            <p  className=""></p>
            <p  className="last">&quot;No último ano e meio, tenho dedicado todo meu tempo livre a um grande sonho: Trabalhar com tecnologia. Sendo autodidata nas tecnologias acima mencionadas, hoje decido dar o próximo passo que é estar com um time onde eu possa de alguma forma contribuir com o que eu já sei e aproveitar a oportunidade para aprender muito no caminho.&quot;</p>
        </div>
        </content>		   
    </article>
    
)
export default Curriculo
       
