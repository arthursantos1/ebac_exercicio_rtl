import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

// Feito dentro do describe os teste de adicionar os dois comentários e utilizando o botão
describe('Teste para o componente PostComment e adicionando comentário', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    // Nesse teste renderiza o Post Comment e adicionar o comentário
    test('Deve adicionar dois comentários', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário adicionado via teste',
            }
        });

        //Aqui ele cria o evento de clicar no butão para adicionar o comentário
        fireEvent.click(screen.getByTestId('comment-button'));

        //Nesse teste ele adicionar um segundo comentário 
        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Segundo comentário adicionado via teste',
            }
        });

        fireEvent.click(screen.getByTestId('comment-button'));

        //Nesse teste ele verifica se o campo possui dois comentários ou mais
        expect(screen.getAllByTestId('comment-campo')).toHaveLength(2)
    });
});