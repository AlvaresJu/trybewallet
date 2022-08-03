import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Tests for the Login Page', () => {
  const mockValidEmail = 'alguem@mail.com';
  const mockInvalidEmail = 'testing_invalide.www';
  const mockValidPassword = 'bak2124a';
  const mockInvalidPassword = 'a1s2s';
  const testIdPassword = 'password-input';
  const testIdEmail = 'email-input';

  test('if the route to the Login Page is "/"', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('if inputs for the user email and password are rendered', () => {
    renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByTestId(testIdEmail);
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByTestId(testIdPassword);
    expect(inputPassword).toBeInTheDocument();
  });

  test('if a button with the text "Entrar" is rendered', () => {
    renderWithRouterAndRedux(<App />);

    const loginBtn = screen.getByRole('button', { name: /entrar/i });
    expect(loginBtn).toBeInTheDocument();
  });

  test('if checks are carried out for the fields of email, password and button', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(testIdEmail);
    const inputPassword = screen.getByTestId(testIdPassword);
    const loginBtn = screen.getByRole('button', { name: /entrar/i });

    expect(inputEmail).toHaveValue('');
    expect(inputPassword).toHaveValue('');
    expect(loginBtn).toBeDisabled();

    userEvent.type(inputPassword, mockValidPassword);
    expect(loginBtn).toBeDisabled();

    userEvent.type(inputEmail, mockInvalidEmail);
    userEvent.type(inputPassword, mockInvalidPassword);
    expect(loginBtn).toBeDisabled();

    userEvent.type(inputEmail, mockInvalidEmail);
    userEvent.type(inputPassword, mockValidPassword);
    expect(loginBtn).toBeDisabled();

    userEvent.type(inputEmail, mockValidEmail);
    userEvent.type(inputPassword, mockInvalidPassword);
    expect(loginBtn).toBeDisabled();

    userEvent.type(inputEmail, mockValidEmail);
    userEvent.type(inputPassword, mockValidPassword);
    expect(loginBtn).toBeEnabled();
  });

  test('if the email is saved in the store, as soon as the user logs in', () => {
    const { store } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(testIdEmail);
    const inputPassword = screen.getByTestId(testIdPassword);
    const loginBtn = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(inputEmail, mockValidEmail);
    userEvent.type(inputPassword, mockValidPassword);
    userEvent.click(loginBtn);

    expect(store.getState().user.email).toBe(mockValidEmail);
  });

  test('if the route is changed to "/carteira" after clicking the button', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(testIdEmail);
    const inputPassword = screen.getByTestId(testIdPassword);
    const loginBtn = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(inputEmail, mockValidEmail);
    userEvent.type(inputPassword, mockValidPassword);
    userEvent.click(loginBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
