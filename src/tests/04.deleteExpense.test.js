import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { renderWithRedux } from './helpers/renderWith';
import { mockData, mockState } from './helpers/mockData';

describe('Tests for the delete expense feature in the Wallet Table', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('if the delete button is inside the last <td> of each <tr> element', async () => {
    const options = { initialState: mockState };
    renderWithRedux(<Wallet />, options);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const tableCells = screen.getAllByRole('cell');
    const deleteBtns = screen.getAllByTestId('delete-btn');

    expect(tableCells[8]).toContainElement(deleteBtns[0]);
    expect(tableCells[17]).toContainElement(deleteBtns[1]);
  });

  test('if the delete button has class="delete-btn"', async () => {
    const options = { initialState: mockState };
    renderWithRedux(<Wallet />, options);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const deleteBtns = screen.getAllByTestId('delete-btn');

    deleteBtns.forEach((btn) => {
      expect(btn).toHaveAttribute('class', 'delete-btn');
    });
  });

  test('if by clicking button, the expense is removed from table and store', async () => {
    const options = { initialState: mockState };
    const { store } = renderWithRedux(<Wallet />, options);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));
    const initialTableRows = 3;

    expect(store.getState().wallet.expenses).toHaveLength(2);
    expect(store.getState().wallet.expenses[0].id).toBe(0);
    let tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(initialTableRows);
    const firstExpense = screen.queryByRole('row', {
      name: /omnis in dignissimos alimentação cartão de crédito 714\.00 xrp\/real/i,
    });

    const deleteBtns = screen.getAllByTestId('delete-btn');
    userEvent.click(deleteBtns[0]);

    expect(store.getState().wallet.expenses).toHaveLength(1);
    expect(store.getState().wallet.expenses[0].id).toBe(1);
    tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(2);
    expect(firstExpense).not.toBeInTheDocument();
  });

  test('if by clicking button, the total expense value is properly updated', async () => {
    const options = { initialState: mockState };
    renderWithRedux(<Wallet />, options);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const totalExpense = screen.getByTestId('total-field');
    expect(totalExpense).toHaveTextContent('7203.88');

    const deleteBtns = screen.getAllByTestId('delete-btn');
    userEvent.click(deleteBtns[0]);

    expect(totalExpense).toHaveTextContent('5825.86');

    userEvent.click(deleteBtns[1]);
    expect(totalExpense).toHaveTextContent('0.00');
  });
});
