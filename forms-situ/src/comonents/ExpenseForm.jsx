import React, { useEffect, useRef, useState } from "react";

export const ExpenseForm = ({setExpenses}) => {
  const[title,setTitle]=useState('');
  const[category,setCategory]=useState('');
  const[amount,setAmount]=useState('');

  const titleRef=useRef(null)//useRef is a ulternate method

  useEffect(()=>{
    console.log(titleRef)
  })

  console.log(title)
  console.log(category)
  console.log(amount)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData={title,category,amount,id:crypto.randomUUID()}
    setExpenses((prevState)=>[...prevState,formData])
    // e.target.reset()
    setTitle('')
    setCategory('')
    setAmount('')
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input 
           id="title" 
           name="title" 
           value={title}
           required
           //ref={titleRef}
           onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select 
            id="category" 
            name="category" 
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            required
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input 
            id="amount" 
            name="amount" 
            type="number"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </>
  );
};

