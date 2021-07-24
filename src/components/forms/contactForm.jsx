import React, { Component } from "react";
class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            rnName: '',
            rnEmail: '',
            rnSubject: '',
            rnMessage: '',
        };
    }
    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                        <h2 className="title">Entre em contato!</h2>

                            <div className="form-wrapper">

                                <form>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.rnName}
                                            onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                            placeholder="Seu Nome *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.rnEmail}
                                            onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                            placeholder="Seu Email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.rnSubject}
                                            onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
                                            placeholder="Digite um assunto"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.rnMessage}
                                            onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
                                            placeholder="Sua Mensagem"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Enviar</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 h-100">
                            <div>
                                <img src="/assets/hire-me.png" alt="trydo"/>
                                <div className="section-title text-left mb--50">
                                <p className="description">Estou disponível para trabalho presencial ou remoto. Entre em contato via telefone: <a href="tel:+8801923088574">+55 11 95996-3068</a> ou email:
                                    <a href="mailto:admin@example.com"> business.brunocosta@gmail.com</a> </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactForm;