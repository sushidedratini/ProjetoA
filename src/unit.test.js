const assert = require('assert');
import { render, screen, fireEvent, getAllByAltText, getAllByText, waitFor } from '@testing-library/react';
import { ListaDeUsuarios } from './ListaDeUsuarios'
import { act } from 'react-dom/test-utils';

describe('Lista de Usuarios Component', (done) => {
    it('Teste Render', async () => {
        
        const { container, getByText, getByAltText, queryByTitle, getByTestId } = render(<ListaDeUsuarios />);

        await waitFor(() => {
            const teste = screen.getByText("Fechar");
            expect(teste).toBeInTheDocument();
        });
        
        expect(container).toBeInTheDocument();
    });

    it('Teste Render 2', async () => {
        const { container, getByText, getByAltText, queryByTitle, getByTestId } = render(<ListaDeUsuarios />);

        
        await waitFor(() => {
            const teste = screen.getByText("Pagamento para ");
            expect(teste).toBeInTheDocument();
        });
        
        
        expect(container).toBeInTheDocument();
    });
});