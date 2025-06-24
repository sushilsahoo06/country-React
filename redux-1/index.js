
import { createStore } from "redux";

const initialstate={
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

function reducer(state=initialstate,action){
  if(action.type==='post/inc'){
    return{...state,post:state.post+1}
  }else if(action.type==='post/dec'){
    return{...state,post:state.post-1}
  }else if(action.type==='post/incBY'){
    return {...state,post:state.post+action.payload}
  }
  return state;

}

const store=createStore(reducer)
console.log(store.getState())

store.dispatch({type:'post/dec'});
console.log(store.getState())

store.dispatch({type:'post/inc'});
console.log(store.getState())

store.dispatch({type:'post/inc'});
console.log(store.getState())

store.dispatch({type:'post/incBY',payload:8});
console.log(store.getState())
