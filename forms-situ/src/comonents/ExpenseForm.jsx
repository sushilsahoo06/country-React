import React, { useEffect, useRef, useState } from "react";

export const ExpenseForm = ({setExpenses}) => {
  const[title,setTitle]=useState('');
  const[category,setCategory]=useState('');
  const[amount,setAmount]=useState('');

  const titleRef=useRef(null)//useRef is a ulternate method

  useEffect(()=>{
    console.log(titleRef)
  })
  //validate functions
  // const validation
  const[error,setError]=useState({})
  const validate=(formData)=>{
    const errorData={}
    if(!formData.title){
      errorData.title='Title is required'
    }
    if(!formData.category){
      errorData.category='Category is required'
    }
    if(!formData.amount){
      errorData.amount='Amount is required'
    }
    setError(errorData)
    return errorData;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult=validate(title,category,amount);
    console.log(validateResult)
    const formData={title,category,amount,id:crypto.randomUUID()}
    setExpenses((prevState)=>[...prevState,formData])
    // e.target.reset()
    setTitle('')
    setCategory('')
    setAmount('')
  };
  const handleChange=(e)=>{
    const {name,value}=e.target;
    if(name==="title") setTitle(value)
    if(name==="category") setCategory(value)
    if(name==="amount") setAmount(value)
  }

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input 
           id="title" 
           name="title" 
           value={title}
          
           //ref={titleRef}
           onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select 
            id="category" 
            name="category" 
            value={category}
            onChange={handleChange}
            
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
            onChange={handleChange}
           
          />
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </>
  );
};

