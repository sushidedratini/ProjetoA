import React, {Component} from 'react';

export default class Api extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        const api = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

        const resposta = await fetch(api);

        const corpo = await resposta.json();

        this.setState({data: corpo})
    }

render() {
    return (
        <div>
            <span>
                {JSON.stringify(this.state.data)}
            </span>
        </div>
    )
}
}