// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_DATA,
  FAILED_REQUEST,
  GET_CURRENCIES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SAVE_EDITED_EXPENSE,
} from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0,
  loading: false,
  requestError: '',
  totalExpense: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_DATA:
    return { ...state, loading: true };
  case FAILED_REQUEST:
    return { ...state, loading: false, requestError: action.requestError };
  case GET_CURRENCIES:
    return { ...state, loading: false, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state,
      loading: false,
      expenses: [...state.expenses, action.expense],
      totalExpense: (state.totalExpense + action.valueBRL) };
  case REMOVE_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.idToRemove),
      totalExpense:
        (action.valueToRemove > state.totalExpense) ? 0
          : (state.totalExpense - action.valueToRemove) };
  case EDIT_EXPENSE:
    return { ...state, editor: true, idToEdit: action.idToEdit };
  case SAVE_EDITED_EXPENSE:
    return { ...state,
      editor: false,
      expenses: state.expenses.map((expense) => {
        if (expense.id !== action.editedData.id) return expense;
        return {
          id: expense.id,
          value: action.editedData.value,
          description: action.editedData.description,
          currency: action.editedData.currency,
          method: action.editedData.method,
          tag: action.editedData.tag,
          exchangeRates: expense.exchangeRates,
        };
      }),
      totalExpense: state.totalExpense - action.subValue + action.addValue };
  default:
    return state;
  }
};

export default wallet;
