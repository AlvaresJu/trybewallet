// Coloque aqui suas actions
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const GET_CURRENCY_TYPES = 'GET_CURRENCY_TYPES';

const requestCurrencies = () => ({ type: REQUEST_CURRENCIES });

const getCurrencyTypes = (currencies) => ({
  type: GET_CURRENCY_TYPES,
  currencies,
});

const failedRequest = (requestError) => ({
  type: FAILED_REQUEST,
  requestError,
});

export const fetchCurrencyTypes = () => async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const requestData = await request.json();

    if (requestData.status) {
      throw new Error(`${requestData.code}: ${requestData.message}`);
    }

    const currencyTypes = Object.keys(requestData).filter((type) => type !== 'USDT');
    dispatch(getCurrencyTypes(currencyTypes));
  } catch (error) {
    dispatch(failedRequest(error.message));
    console.log(error.message);
  }
};
