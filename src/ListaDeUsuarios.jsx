import React, {Component} from 'react';
import './listadeusuarios.css';

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

render() {
    return (
        <div className="dados-listagem">
            {this.state.dados.map(item => (
                <ul>
                    <li key={item.img}><img className="thumbnail" src={item.img} alt="Foto do usuário"></img></li>
                    <li key={item.name} className="nomedeusuario">Nome do Usuário: {item.name}</li>
                    <li key={item.id} className="id-username">ID: {item.id} - Username: {item.username}</li>
                    <li className="botao-pagar"><button>Pagar</button></li>
                </ul>
            ))}
        </div>
    )
}
}