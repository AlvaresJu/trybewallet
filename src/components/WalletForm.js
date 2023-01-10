import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDataAndAddExpense,
  handleFormChange,
  saveEditedExpense } from '../redux/actions/walletActions';
import '../styles/walletForm.css';

class WalletForm extends Component {
  handleAddExpense = (event) => {
    event.preventDefault();
    const { expenses, addExpenseItem, formData } = this.props;
    const id = (expenses.length > 0) ? (expenses[expenses.length - 1].id + 1) : 0;
    const expenseData = { id, ...formData };
    addExpenseItem(expenseData);
  }

  handleSaveEdited = (event) => {
    event.preventDefault();
    const { expenses, idToEdit, formData, editExpenseItem } = this.props;
    const prevData = expenses.find(({ id }) => id === idToEdit);
    const valueToSub = prevData.value * prevData.exchangeRates[prevData.currency].ask;
    const valueToAdd = formData.value * prevData.exchangeRates[formData.currency].ask;
    const editedExpenseData = { id: idToEdit, ...formData };
    editExpenseItem(editedExpenseData, valueToSub, valueToAdd);
  }

  render() {
    const { currencies, editor, formData, handleChange } = this.props;
    const { value, description, currency, method, tag } = formData;
    return (
      <form className="wallet-form">
        <h3>Cadastro de Despesa</h3>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            data-testid="value-input"
            id="value"
            min={ 0 }
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency"
            value={ currency }
            onChange={ handleChange }
          >
            {
              (currencies.length > 0)
                && currencies.map((element) => <option key={ element }>{element}</option>)
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            data-testid="method-input"
            id="method"
            value={ method }
            onChange={ handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            id="tag"
            value={ tag }
            onChange={ handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            id="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        { editor ? (
          <button type="submit" onClick={ this.handleSaveEdited }>
            Editar despesa
          </button>
        ) : (
          <button type="submit" onClick={ this.handleAddExpense }>
            Adicionar despesa
          </button>
        ) }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
  formData: state.wallet.formData,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseItem: (expense) => dispatch(fetchDataAndAddExpense(expense)),
  editExpenseItem: (editedData, subValue, addValue) => dispatch(
    saveEditedExpense(editedData, subValue, addValue),
  ),
  handleChange: (event) => dispatch(handleFormChange(event)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  editor: PropTypes.bool.isRequired,
  idToEdit: PropTypes.number.isRequired,
  formData: PropTypes.objectOf(PropTypes.string).isRequired,
  addExpenseItem: PropTypes.func.isRequired,
  editExpenseItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
