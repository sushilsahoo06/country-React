import './App.css'
import { ExpenseForm } from './comonents/ExpenseForm'
import { ExpenseTable } from './comonents/ExpenseTable'

function App() {
  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div class="expense-tracker">
        <ExpenseForm/>
        <ExpenseTable/>
      </div>
    </main>
    </>
  )
}

export default App
