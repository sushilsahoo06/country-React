import { createStore } from "redux";
let reducerstate={
  post:0,
  name:'sushil',
  age:'19'
}
// let prevState=state;
// function increment(){
//   //mutating state
//   // state.count=state.count+1;
//   //non mutating state
//   state={...state,count:state.count+1}
// }

// increment()
// console.log(state)
// increment()
// console.log(state)
// increment()
// console.log(state)

function reducer(state,action){
  if(action.type==='post/inc'){
    return{...state,post:state.post+1}
  }else if(action.type==='post/dec'){
    return{...state,post:state.post-1}
  }else if(action.type==='post/incBY'){
    return {...state,post:state.post+action.paylod}
  }
  return state;

}
reducerstate=reducer(reducerstate,{type:'post/inc'})
console.log(reducerstate)
reducerstate=reducer(reducerstate,{type:'post/inc'})
console.log(reducerstate)
reducerstate=reducer(reducerstate,{type:'post/dec'})
console.log(reducerstate)
reducerstate=reducer(reducerstate,{type:'post/inc'})
reducerstate=reducer(reducerstate,{type:'post/inc'})
console.log(reducerstate)
reducerstate=reducer(reducerstate,{type:'post/incBY',paylod:10})
console.log(reducerstate)
