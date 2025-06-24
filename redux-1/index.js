

let reducerstate={
  count:0,
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

function reducer(state){
  return{...state,count:state.count+1}
}
reducerstate=reducer(reducerstate)
reducerstate=reducer(reducerstate)
reducerstate=reducer(reducerstate)
reducerstate=reducer(reducerstate)

