import React, {Component} from 'react';
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
        <table className="dados-listagem">
            {this.state.dados.map(item => (
                <tr>
                    <td key={item.img}><img className="thumbnail" src={item.img} alt="Foto do usuário"></img></td>
                    <td key={item.name} className="nomedeusuario">Nome do Usuário: {item.name}<span>ID: {item.id} - Username: {item.username}</span>
                    </td>
                    <td><button className="botao-pagar" onClick="fazerPagamento()">Pagar</button></td>
                </tr>
            ))}
        </table>
    )
}
}