import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  return (
    <ul className="expenses-list">
      {props.expenses.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expenses</h2>
      ) : (
        props.expenses.map(function (expense) {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )}
    </ul>
  );
}

export default ExpensesList;
