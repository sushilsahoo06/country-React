import React from "react";

export const ExpenseForm = ({setExpenses}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData=getFormData(e.target)
    setExpenses((prevState)=>[...prevState,
      {...formData,id:crypto.randomUUID()}
    ])
    e.target.reset()
  };
  const getFormData=(form)=>{
    const formData=new FormData(form);
    const data={};
    for(const [key,value] of formData.entries()){
      data[key]=value;
    }
    return data;
  }

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" required/>
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
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
          <input id="amount" name="amount" type="number" required/>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </>
  );
};

