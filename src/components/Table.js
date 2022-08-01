import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, startEditingExpense } from '../redux/actions/walletActions';

class Table extends Component {
  handleRemoveExpense = ({ id, value, currency, exchangeRates }) => {
    const { removeExpenseItem } = this.props;
    const valueToRemove = value * exchangeRates[currency].ask;
    removeExpenseItem(id, valueToRemove);
  }

  handleEditExpense = (id) => {
    const { enableExpenseEditing } = this.props;
    enableExpenseEditing(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="expenses-table">
        <caption>Lista de Despesas</caption>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            (expenses.length > 0) && expenses.map((expense) => {
              const { id,
                value,
                description,
                currency,
                method,
                tag,
                exchangeRates } = expense;
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="edit-btn"
                      onClick={ () => this.handleEditExpense(id) }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.handleRemoveExpense(expense) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseItem:
    (idToRemove, valueToRemove) => dispatch(removeExpense(idToRemove, valueToRemove)),
  enableExpenseEditing: (idToEdit) => dispatch(startEditingExpense(idToEdit)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpenseItem: PropTypes.func.isRequired,
  enableExpenseEditing: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
