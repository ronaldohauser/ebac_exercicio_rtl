import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComments />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('Deve inserir dois comentários', async () => {
    render(<PostComments />);

    const commentInput = screen.getByTestId('comment-input');
    fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    });

    fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
  });
});
