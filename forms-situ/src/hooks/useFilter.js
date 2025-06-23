import { useState } from "react"

export function useFilter(datalist,callback) {
  const[query,setQuery]=useState('');

  const FiltereData=datalist.filter((data)=>{
    //return el.category.toLowerCase().includes(query)
    return callback(data).toLowerCase().includes(query.toLowerCase())
  });
  
  return [FiltereData,setQuery]
}
