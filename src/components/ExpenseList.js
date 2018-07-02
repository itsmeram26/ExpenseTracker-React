import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Hello ExpenseList</h1>
        {props.expenses.length}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : state.expenses
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;