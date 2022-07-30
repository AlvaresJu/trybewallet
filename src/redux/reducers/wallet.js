// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_DATA,
  FAILED_REQUEST,
  GET_CURRENCIES,
  ADD_EXPENSE,
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
  default:
    return state;
  }
};

export default wallet;
