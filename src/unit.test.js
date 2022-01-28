const assert = require('assert');
import { render, screen } from '@testing-library/react';
import { ListaDeUsuarios } from './ListaDeUsuarios'

describe('Lista de Usuarios Component', (done) => {
    it('Teste Render', () => {
        const { container } = render(<ListaDeUsuarios />);
        // const nomeUsuario = screen.getByText("Eduardo Santos");

        expect(container).toBeInTheDocument();
    });
});