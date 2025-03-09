import { useState } from 'react'
import './App.css'
import { ExpenseForm } from './comonents/ExpenseForm'
import { ExpenseTable } from './comonents/ExpenseTable'
import expenseData from '../expenseData'

function App() {
  const[expenses,setexpenses]=useState(expenseData)
  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div class="expense-tracker">
        <ExpenseForm/>
        <ExpenseTable expenses={expenses}/>
      </div>
    </main>
    </>
  )
}

export default App
