import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { renderWithRedux } from './helpers/renderWith';
import { mockFailedData, mockCurrencies } from './helpers/mockData';

describe('Tests of API requests failure', () => {
  const mockError = 'CoinNotExists: moeda nao encontrada JSON-BRL';
  const mockValue = '715.00';
  const mockDescription = 'Despesa teste';

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockFailedData),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('a failed request before the Wallet form rendering', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const { store } = renderWithRedux(<Wallet />);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    expect(consoleSpy).toBeCalledTimes(1);
    expect(consoleSpy).toBeCalledWith(mockError);

    mockCurrencies.forEach((currency) => {
      const currencyOption = screen.queryByRole('option', { name: currency });
      expect(currencyOption).not.toBeInTheDocument();
    });

    expect(store.getState().wallet.requestError).toBe(mockError);
  });

  test('a failed request by adding a expense', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const { store } = renderWithRedux(<Wallet />);

    const valueInput = await screen.findByTestId('value-input');
    userEvent.type(valueInput, mockValue);
    const descriptionInput = await screen.findByTestId('description-input');
    userEvent.type(descriptionInput, mockDescription);

    const addBtn = await screen.findByRole('button', { name: /adicionar despesa/i });
    userEvent.click(addBtn);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    expect(consoleSpy).toBeCalledTimes(2);
    expect(consoleSpy).toBeCalledWith(mockError);

    expect(store.getState().wallet.expenses).toHaveLength(0);
    expect(store.getState().wallet.requestError).toBe(mockError);
  });
});
