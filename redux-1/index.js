
let state={
  count:0,
}
let prevState=state;
function increment(){
  //mutating state
  // state.count=state.count+1;
  //non mutating state
  state={count:state.count+1}
}
increment()
console.log(state)
increment()
console.log(state)
increment()
console.log(state)
