import{createStore} from 'redux'
// let prevState=state;
// function increament(){
//   //mutating state
//   // state.count=state.count+1
//   //not mutating state
//   state={...state,count:state.count+1}
// }
// increament()
// console.log(state)
// increament()
// console.log(state)
// increament()
// console.log(state)
// increament()
// console.log(state)

let reduxstate = {
  post: 0,
  name: "sushil",
  age: 20
};

function reducer(state=reduxstate,action) { 
  if(action.type ==='post/increment'){
    return { ...state, post: state.post+ 1 };
  }else if (action.type==='post/decrement'){
    return { ...state, post: state.post - 1 };
  }else if (action.type==='post/incrementBy'){
    return{...state,post:state.post+action.payLoad}
  }
  return state
}

console.log(reduxstate);
reduxstate = reducer(reduxstate,{type:'post/increment'});
console.log(reduxstate);
reduxstate = reducer(reduxstate,{type:'post/increment'});
console.log(reduxstate);
reduxstate = reducer(reduxstate,{type:'post/decrement'});
console.log(reduxstate);
reduxstate = reducer(reduxstate,{type:'post/incrementBy',payLoad:10});
console.log(reduxstate);
reduxstate = reducer(reduxstate,{type:'sushil'});
console.log(reduxstate);
