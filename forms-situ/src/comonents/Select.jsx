import React from 'react'

export default function Select({label,id,name,value,onChange,options=[],defaultCategory,error}) {
  return (
    <div className="input-container">
          <label htmlFor={id}>{label}</label>
          <select 
            id={id}
            name={name} 
            value={value}
            onChange={onChange}  
          >

            <option value="" hidden>
              {defaultCategory}
            </option>
            {
              options.map((option,index)=>(<option key={index} value={option}>{option}</option>))
            }
            
          </select>
          <p className="error">{error}</p>
        </div>
  );
}
