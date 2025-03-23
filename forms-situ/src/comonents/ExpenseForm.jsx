import React, { useEffect, useRef, useState } from "react";
import Input from "./input";
import Select from "./Select";

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
  const validatationConfig={
    title:[
      {required:true,message:'Please enter Title'},
      {minLength:5,message:'Title should be at least 5 characters long'}
    ],
    category:[
      {required:true,message:'Please enter Category'}
    ],
    amount:[{required:true,message:'Please enter amount'}]
  }

  const validate=(formData)=>{
    const errorData={}

 
    Object.entries(formData).forEach(([key, value]) => {
      validatationConfig[key]?.forEach((rule) => {
        if (rule.required && !value) {
          // If the field is empty, show only the required message
          errorData[key] = rule.message;
        } else if (rule.minLength && typeof value === "string" && value.length < rule.minLength) {
          // Only check minLength if the required check passed
          if (!errorData[key]) {
            errorData[key] = rule.message;
          }
        }
      });
    });
  

    // if(!formData.title){
    //   errorData.title='Title is required'
    // }
    // if(!formData.category){
    //   errorData.category='Please select Category'
    // }
    // if(!formData.amount){
    //   errorData.amount='Amount is required'
    // }
    setError(errorData)
    return errorData;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData={title,category,amount};
    const errors=validate(formData)
    if(Object.keys(errors).length)return

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

        <Select
          label='Category'
          id='category'
          name='category'
          value={category}
          options={["grocery","clothes","bills","education","Medicine"]}
          defaultCategory='Select Category'
          onChange={handleChange}
          error={error.category}
          
        />

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

