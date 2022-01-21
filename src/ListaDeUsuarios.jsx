import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import './listadeusuarios.css';
import axios from 'axios';
import ic_pagto from './assets/icons/attach_money_black_24dp.svg';

//Pegando as informações da API pelo GET
const ListaDeUsuarios = () => {
    const [infos, setInfos] = useState([])
    useEffect(() => {
        axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce', {
            method: 'GET',
        }).then((resposta) => {setInfos(resposta.data)})
    }, [])

// Mock com lista de cartões para teste
const cards = [
    // cartão válido
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // cartão inválido
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
];

// Função para pegar a escolha do cartão do input select
const escolhaDoCartao = (event) => {
    setValorCartao(event.target.value);
}

// Ações dos modals
const [abrirPagamento, setAbrirPagamento] = useState("none"); // Para abrir modal de pagamento
const [pegarUsuario, setPegarUsuario] = useState(""); // Para pegar o nome do usuário
const [abrirPagou, setAbrirPagou] = useState("none"); // Para abrir modal com recibo de pagamento
const [abrirNaoRecebeu, setAbrirNaoRecebeu] = useState(""); // Para msg de erro de pagamento
const [valorCartao, setValorCartao] = useState("1"); // Para pegar o cartão escolhido para pagamento
const [valorDinheiro, setValorDinheiro] = useState(""); // Para pegar o valor de pagamento digitado
const [validarCampo, setValidarCampo] = useState("none"); // Para validar campo de valor digitado

// Função para abrir o modal de pagamento do usuário
const abrirModalPagar = (name) => {
    setAbrirPagamento("flex")
    setPegarUsuario(name)
}

// Função que abre o modal de recibo de pagamento 
const abrirModalPagou = () => {
    if (valorDinheiro === "") {
        setValidarCampo("flex");
    } else 
        {
        if (valorCartao === "1") {
            setAbrirNaoRecebeu("");
        } else {
            setAbrirNaoRecebeu("não");
        }
        setAbrirPagamento("none");
        setAbrirPagou("flex");
        setValorDinheiro("");
        setValidarCampo("none");
    }
}

// Função para fechar o modal do recibo de pagamento
const fecharModal = () => {
    setAbrirPagou("none");
}

// Função para validar campo de valor para pagamento do usuário
const valorInput = (event) => {
    setValorDinheiro(event.target.value);
    setValidarCampo("none");
}

// Renderizando na tela as informações recebidas da API 
    return (
        <>
            <div className="teste">
            {infos.map(item => (
                <div className="container" key={item.index}>
                    <div className='profile-container'>
                        <img className="thumbnail" src={item.img} alt="Foto do usuário" />
                        <button type='submit' className='btn-pgto' onClick={()=>{abrirModalPagar(item.name)}}>
                            <img src={ic_pagto} className='icon' alt='Pagar'/>
                        </button>
                    </div>

                    <div className='infos'>
                        <p className='item-id'>#{item.id}</p>
                        <p className='item-name'>{item.name}</p>
                        <p className='item-username'>{item.username}</p>
                    </div>
                    <div className='btn-container'>
                        <button type='submit' className='btn-pgto2' onClick={()=>{abrirModalPagar(item.name)}}>
                            <img src={ic_pagto} className='icon' alt='Pagar'/>
                        </button>
                    </div>
                </div>
            ))}
            </div>

            {/*--------------------------------Abrir Modal de pagamento----------------------------------*/}
            <div className="abrirModal" style={{display: abrirPagamento}}>
                <p className="texto-cabecalho-modal">Pagamento para <span>{pegarUsuario}</span></p>
                <div className="valorInput">
                <NumberFormat thousandSeparator={true} value={valorDinheiro} onChange={valorInput} prefix={'R$ '} inputmode="numeric" placeholder="R$ 0,00"/>
                <p style={{display:validarCampo}}>Campo obrigatório</p>
                </div>
                <select value={valorCartao} onChange={escolhaDoCartao}>
                <option value="1">Cartão com final {cards[0].card_number.substr(-4)}</option>
                <option value="2">Cartão com final {cards[1].card_number.substr(-4)}</option>
                </select>
                <button onClick={()=>{abrirModalPagou ()}}>Pagar</button>
            </div>  

            {/*------------------------------Abrir Modal de recibo de pagamento--------------------------------*/}
            <div className="abrirModal" style={{display: abrirPagou}}>
                <p className="texto-cabecalho-modal">Recibo de pagamento</p>
                <p>O Pagamento <b>{abrirNaoRecebeu}</b> foi concluído com sucesso</p>
                <button onClick={()=>{fecharModal()}}>Fechar</button>
            </div>
        </>
    )
}

export default ListaDeUsuarios