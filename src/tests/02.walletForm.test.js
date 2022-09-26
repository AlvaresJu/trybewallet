import React from 'react';
import { screen } from '@testing-library/react';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import { mockData, mockCurrencies } from './helpers/mockData';

describe('Tests for the Wallet form', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('if there is an input to add the expense value', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const valueInput = await screen.findByTestId('value-input');
    expect(valueInput).toBeInTheDocument();
  });

  test('if there is an input to add the expense description', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const descriptionInput = await screen.findByTestId('description-input');
    expect(descriptionInput).toBeInTheDocument();
  });

  test('if there is a select field, with correct options, to currency', async () => {
    const { store } = renderWithRouterAndRedux(<Wallet />);
    const currencyInput = await screen.findByTestId('currency-input');
    expect(currencyInput).toBeInTheDocument();

    expect(global.fetch).toBeCalledWith('https://economia.awesomeapi.com.br/json/all');

    expect(store.getState().wallet.currencies).toEqual(mockCurrencies);

    mockCurrencies.forEach((currency) => {
      const currencyOption = screen.getByRole('option', { name: currency });
      expect(currencyOption).toBeInTheDocument();
    });
  });

  test('if there is a select field with correct options, to payment method', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const methodInput = await screen.findByTestId('method-input');
    expect(methodInput).toBeInTheDocument();

    const cashOption = await screen.findByRole('option', { name: /dinheiro/i });
    expect(cashOption).toBeInTheDocument();

    const creditCardOption = await screen
      .findByRole('option', { name: /cartão de crédito/i });
    expect(creditCardOption).toBeInTheDocument();

    const debitCardOption = await screen
      .findByRole('option', { name: /cartão de débito/i });
    expect(debitCardOption).toBeInTheDocument();
  });

  test('if there is a select field, with correct options, to expense tag', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const tagInput = await screen.findByTestId('tag-input');
    expect(tagInput).toBeInTheDocument();

    const foodOption = await screen.findByRole('option', { name: /alimentação/i });
    expect(foodOption).toBeInTheDocument();

    const leisureOption = await screen.findByRole('option', { name: /lazer/i });
    expect(leisureOption).toBeInTheDocument();

    const workOption = await screen.findByRole('option', { name: /trabalho/i });
    expect(workOption).toBeInTheDocument();

    const transportOption = await screen.findByRole('option', { name: /transporte/i });
    expect(transportOption).toBeInTheDocument();

    const healthOption = await screen.findByRole('option', { name: /saúde/i });
    expect(healthOption).toBeInTheDocument();
  });
});
