import { useState } from 'react'
import './App.css'
import { ExpenseForm } from './comonents/ExpenseForm'
import { ExpenseTable } from './comonents/ExpenseTable'
import expenseData from '../expenseData'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const[expenses,setExpenses]=useState(expenseData);
  const [localData,setLocalData]=useLocalStorage('mynum',[1,2,3])

  return (
    <>
      <main>
      <h1
      onClick={()=>{
        setLocalData((prevState)=>[...new Set([...prevState,4,5,6])])//avoid duplicate values
      }}>Track Your Expense</h1>
      <h2>{localData.join('')}</h2>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses}/>
        <ExpenseTable expenses={expenses}/>
      </div>
    </main>
    </>
  )
}

export default App
