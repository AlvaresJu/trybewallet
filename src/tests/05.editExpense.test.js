import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import { renderWithRedux } from './helpers/renderWith';
import { mockData, mockState } from './helpers/mockData';

describe('Tests for the edit expense feature in the Wallet Table', () => {
  const mockEditedValue = '90.00';
  const mockEditedCurrency = 'EUR';

  const valueInputTesid = 'value-input';

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('if the edit button is inside the last <td> of each <tr> element', async () => {
    const options = { initialState: mockState };
    renderWithRedux(<Wallet />, options);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const tableCells = screen.getAllByRole('cell');
    const editBtns = screen.getAllByTestId('edit-btn');

    expect(tableCells[8]).toContainElement(editBtns[0]);
    expect(tableCells[17]).toContainElement(editBtns[1]);
  });

  test('if the edit button has class="edit-btn"', async () => {
    const options = { initialState: mockState };
    renderWithRedux(<Wallet />, options);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const editBtns = screen.getAllByTestId('edit-btn');

    editBtns.forEach((btn) => {
      expect(btn).toHaveAttribute('class', 'edit-btn');
    });
  });

  test('if by clicking the button, the wallet add form become a edit form', async () => {
    const options = { initialState: mockState };
    renderWithRedux(<Wallet />, options);

    const valueInput = await screen.findByTestId(valueInputTesid);
    const descriptionInput = await screen.findByTestId('description-input');
    const currencyOption = await screen.findByRole('option', { name: 'USD' });
    const cashOption = await screen.findByRole('option', { name: /dinheiro/i });
    const foodOption = await screen.findByRole('option', { name: /alimentação/i });
    expect(valueInput.value).toBe('');
    expect(descriptionInput.value).toBe('');
    expect(currencyOption.selected).toBe(true);
    expect(cashOption.selected).toBe(true);
    expect(foodOption.selected).toBe(true);

    const editBtns = screen.getAllByTestId('edit-btn');
    userEvent.click(editBtns[0]);

    const currencyToEdit = screen.getByRole('option', {
      name: mockState.wallet.expenses[0].currency });
    const methodToEdit = screen.getByRole('option', {
      name: mockState.wallet.expenses[0].method });
    const tagToEdit = screen.getByRole('option', {
      name: mockState.wallet.expenses[0].tag });
    expect(valueInput.value).toBe(mockState.wallet.expenses[0].value);
    expect(descriptionInput.value).toBe(mockState.wallet.expenses[0].description);
    expect(currencyToEdit.selected).toBe(true);
    expect(methodToEdit.selected).toBe(true);
    expect(tagToEdit.selected).toBe(true);
  });

  test('if by clicking button, the form add button became a edit button', async () => {
    const options = { initialState: mockState };
    renderWithRedux(<Wallet />, options);

    const addBtn = await screen.findByRole('button', { name: /adicionar despesa/i });
    expect(addBtn).toBeInTheDocument();

    const editBtns = screen.getAllByTestId('edit-btn');
    userEvent.click(editBtns[0]);

    const editExpenseBtn = screen.getByRole('button', { name: /editar despesa/i });
    expect(editExpenseBtn).toBeInTheDocument();
    const addExpenseBtn = screen.queryByRole('button', { name: /adicionar despesa/i });
    expect(addExpenseBtn).not.toBeInTheDocument();
  });

  test('if after to edit expense, the expenses key in store is updated', async () => {
    const options = { initialState: mockState };
    const { store } = renderWithRedux(<Wallet />, options);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const editBtns = screen.getAllByTestId('edit-btn');
    userEvent.click(editBtns[0]);

    const valueInput = screen.getByTestId(valueInputTesid);
    userEvent.type(valueInput, mockEditedValue);
    const currencyInput = screen.getByTestId('currency-input');
    userEvent.selectOptions(currencyInput, [mockEditedCurrency]);

    const editExpenseBtn = screen.queryByRole('button', { name: /editar despesa/i });
    userEvent.click(editExpenseBtn);

    expect(store.getState().wallet.expenses[0].value).toBe(mockEditedValue);
    expect(store.getState().wallet.expenses[0].currency).toBe(mockEditedCurrency);
  });

  test('if after to edit expense, the total expense value is updated', async () => {
    const options = { initialState: mockState };
    renderWithRedux(<Wallet />, options);
    await waitForElementToBeRemoved(screen.queryByText(/carregando/i));

    const totalExpense = screen.getByTestId('total-field');
    expect(totalExpense).toHaveTextContent('7203.88');

    const editBtns = screen.getAllByTestId('edit-btn');
    userEvent.click(editBtns[0]);

    const valueInput = screen.getByTestId(valueInputTesid);
    userEvent.type(valueInput, mockEditedValue);
    const currencyInput = screen.getByTestId('currency-input');
    userEvent.selectOptions(currencyInput, [mockEditedCurrency]);

    const editExpenseBtn = screen.queryByRole('button', { name: /editar despesa/i });
    userEvent.click(editExpenseBtn);

    expect(totalExpense).toHaveTextContent('6287.27');
  });
});
