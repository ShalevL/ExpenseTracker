import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function expenses(props) {
  return (
    <Card className="expenses">
      <ExpensesChart expenses={props.expenses} />
      <ExpensesList expenses={props.expenses} />
    </Card>
  );
}
export default expenses;
