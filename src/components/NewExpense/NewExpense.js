import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // again passing back this data from here to the app.js
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* adding props to get the form data from child to parent */}
      <ExpenseForm onSaveExpenseData={savedExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
