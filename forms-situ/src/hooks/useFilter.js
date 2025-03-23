import { useState } from "react"

export function useFilter(data,callback) {
  const[query,setQuery]=useState('');
  const FiltereData=data.filter((el)=>{
    return el.category.toLowerCase().includes(query)
  });
  
  return [FiltereData,setQuery]
}
