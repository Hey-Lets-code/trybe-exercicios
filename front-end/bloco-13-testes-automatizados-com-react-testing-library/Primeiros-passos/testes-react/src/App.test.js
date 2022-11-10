// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from './App';

  // describe('Verificar se o email está sendo salvo', () => {
    // it('Verificando se o botão e o campo de email estão funcionando', () => {
      // render(<App />);

      // const EMAIL_USER = 'email@email.com';

      // const textEmail = screen.getByTestId('id-email-user'); // capturando o elemento
      // expect(textEmail).toBeInTheDocument(); // verificando ser está dentro da tela
      // expect(textEmail).toHaveTextContent('Valor:'); // pq ele não está verificando o template literal?

      // const btnSend = screen.getByTestId('id-send'); // capturando o id do elemento
      // const inputEmail = screen.getByLabelText('Email'); // verificando conteúdo do texto da label
      // userEvent.type(inputEmail, EMAIL_USER); // se Email recebe email@email.com
      // userEvent.click(btnSend); // click será quando o usuário clicar no botão de enviar

      // expect(inputEmail).toHaveValue(''); // quando o usuário clicar, testar se ele começa vazio
      // expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`); // Pq em cima o EMAIL_USER não está sendo chamado?
    // });
  // });

  // App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});
