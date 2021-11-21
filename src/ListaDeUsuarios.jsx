import React, {Component, Pagamentos} from 'react';
import './listadeusuarios.css';

//Consumindo as informações da API
export default class ListaDeUsuarios extends Component {
    state = {
        dados: []
    }

    async componentDidMount() {
        const listaDeUsuarios = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

        const resposta = await fetch(listaDeUsuarios);

        const corpo = await resposta.json();

        this.setState({dados: corpo})
    }

// Renderizando na tela as informações recebidas da API 
render() {
    return (
        <>
            {this.state.dados.map(item => (
                <div className="container">
                    <div className="content">
                        <img key={item.img} className="thumbnail" src={item.img} alt="Foto do usuário" />
                        <div className="infos">   
                            <p key={item.name}>Nome do Usuário: {item.name}</p>
                            <p key={item.id}>ID: {item.id} - Username: {item.username}</p>
                        </div>
                        <button className="botao-pagar" onClick={Pagamentos}>Pagar</button>
                    </div>
                </div>
                ))}
        </>
    )
    }
}