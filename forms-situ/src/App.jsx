//import { useState } from 'react'
import './App.css'
import { ExpenseForm } from './comonents/ExpenseForm'
import { ExpenseTable } from './comonents/ExpenseTable'
import expenseData from '../expenseData'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  //const[expenses,setExpenses]=useState(expenseData);
  //const [localData,setLocalData]=useLocalStorage('mynum',[1,2,3])
  const[expenses,setExpenses]=useLocalStorage("expenses",expenseData);
  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses}/>
        <ExpenseTable expenses={expenses}/>
      </div>
    </main>
    </>
  )
}

export default App
