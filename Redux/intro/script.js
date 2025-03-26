let state={
  count:0
}
function increament(){
  //mutating state
  // state.count=state.count+1
  //not mutating state
  state={count:state.count+1}
}
console.log(state)