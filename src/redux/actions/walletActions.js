// Coloque aqui suas actions
export const REQUEST_DATA = 'REQUEST_DATA';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVE_EDITED_EXPENSE = 'SAVE_EDITED_EXPENSE';
export const CHANGE_INPUT = 'CHANGE_INPUT';

const requestData = () => ({ type: REQUEST_DATA });

const failedRequest = (requestError) => ({
  type: FAILED_REQUEST,
  requestError,
});

const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(requestData());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const requestResult = await request.json();
    if (requestResult.status) {
      throw new Error(`${requestResult.code}: ${requestResult.message}`);
    } else {
      const currencyList = Object.keys(requestResult).filter((type) => type !== 'USDT');
      dispatch(getCurrencies(currencyList));
    }
  } catch (error) {
    dispatch(failedRequest(error.message));
    console.log(error.message);
  }
};

const addExpense = (expense, valueBRL) => ({
  type: ADD_EXPENSE,
  expense,
  valueBRL,
});

export const fetchDataAndAddExpense = (expenseData) => async (dispatch) => {
  dispatch(requestData());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const requestResult = await request.json();
    if (requestResult.status) {
      throw new Error(`${requestResult.code}: ${requestResult.message}`);
    } else {
      const expense = { ...expenseData, exchangeRates: requestResult };
      const { value, currency } = expenseData;
      const valueBRL = value * requestResult[currency].ask;
      dispatch(addExpense(expense, valueBRL));
    }
  } catch (error) {
    dispatch(failedRequest(error.message));
    console.log(error.message);
  }
};

export const removeExpense = (idToRemove, valueToRemove) => ({
  type: REMOVE_EXPENSE,
  idToRemove,
  valueToRemove,
});

export const startEditingExpense = (idToEdit, inputsToEdit) => ({
  type: EDIT_EXPENSE,
  idToEdit,
  inputsToEdit,
});

export const saveEditedExpense = (editedData, subValue, addValue) => ({
  type: SAVE_EDITED_EXPENSE,
  editedData,
  subValue,
  addValue,
});

export const handleFormChange = ({ target }) => ({
  type: CHANGE_INPUT,
  input: target.id,
  inputValue: target.value,
});
