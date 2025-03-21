import React, { useEffect, useRef, useState } from "react";
import Input from "./input";

export const ExpenseForm = ({setExpenses}) => {
  const[title,setTitle]=useState('');
  const[category,setCategory]=useState('');
  const[amount,setAmount]=useState('');
  const[error,setError]=useState({})
  const titleRef=useRef(null)//useRef is a ulternate method

  useEffect(()=>{
    console.log(titleRef)
  })
  //validate functions
  // const validation

  const validate=(formData)=>{
    const errorData={}
    if(!formData.title){
      errorData.title='Title is required'
    }
    if(!formData.category){
      errorData.category='Please select Category'
    }
    if(!formData.amount){
      errorData.amount='Amount is required'
    }
    setError(errorData)
    return errorData;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData=validate(title,category,amount);
    if(Object.keys(formData).length)return

    setExpenses((prevState)=>[...prevState,{...formData,id:crypto.randomUUID()}])
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
    setError((prevError)=>({...prevError,[name]:""}));
  }

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input 
          label='Title' 
          id="title" 
          name="title" 
          value={title} 
          onChange={handleChange}
          error={error.title}
        />

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
          <p className="error">{error.category}</p>
        </div>
         <Input 
           label='Amount' 
           id="amount" 
           name="amount" 
           value={amount} 
           onChange={handleChange}
           error={error.amount}
         />

        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </>
  );
};

