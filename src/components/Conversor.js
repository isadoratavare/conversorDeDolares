import React, { Component } from "react";
import '../components/Conversor.css';

export default class Conversor extends Component{
    constructor(props){
        super(props);

        this.state = {
            //valor digitado pelo o usuário
            moedaA_valor:"",
            //valor convertido
            moedaB_valor:0
        }

        this.converter = this.converter.bind(this)
    }
    
    converter(){
        var a = parseFloat(this.state.moedaA_valor)
        console.log(document.getElementById("valor"))
        var valor = document.getElementById("valor")
        valor.innerHTML = "Valor convertido R$" + a * 5.75
    }

    render() {
        return(
            <div className="conversor">
                <h1>Conversor de moedas</h1>
                <h3>Convertendo de dólar({this.props.moedaA}) para real({this.props.moedaB})</h3>
                <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}} placeholder="Digite o valor em dólar(apenas números)"></input>
                <button onClick={this.converter}><span class="material-icons md-48">paid</span>Converter</button>
                <h2 id="valor">Valor convertido </h2>
            </div>
        )
    }}