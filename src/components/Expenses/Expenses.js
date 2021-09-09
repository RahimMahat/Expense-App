import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* Taking the expenses array from App.js then by using map rendering the ExpenseItem element as jsx allows us to do that  */}
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* removed the hardcoded Expenseitem elements to display the data dynamically  */}
    </Card>
  );
}

export default Expenses;
