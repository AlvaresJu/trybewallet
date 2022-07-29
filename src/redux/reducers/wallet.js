// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCIES,
  FAILED_REQUEST,
  GET_CURRENCY_TYPES,
} from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0,
  requestError: '',
  loading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, loading: true };
  case GET_CURRENCY_TYPES:
    return { ...state, loading: false, currencies: action.currencies };
  case FAILED_REQUEST:
    return { ...state, loading: false, requestError: action.requestError };
  default:
    return state;
  }
};

export default wallet;
