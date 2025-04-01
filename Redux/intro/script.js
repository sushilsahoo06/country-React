import{createStore} from 'redux'
import { My_store } from './my_Redux';
const postCount=document.querySelector('.redux')
let reduxstate = {
  post: 0,
  name: "sushil",
  age: 20
};
const PoatInc='post/increment'
const PostDec='post/decrement'
const incPay='post/incrementBy'
function reducer(state=reduxstate,action) { 
  // if(action.type ===PoatInc){
  //   return { ...state, post: state.post+ 1 };
  // }else if (action.type===PostDec){
  //   return { ...state, post: state.post - 1 };
  // }else if (action.type===incPay){
  //   return{...state,post:state.post+action.payLoad}
  // }
  // return state
  switch(action.type){
    case PoatInc:
      return { ...state, post: state.post+ 1 };
    case PostDec:
      return { ...state, post: state.post - 1 };
    case incPay:
      return{...state,post:state.post+action.payLoad}
    default:
       return state
  }
}
const My_store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__?.())
const mystore=My_store(reducer)
console.log(mystore)

const unsuscribe=My_store.subscribe(()=>{
  console.log(My_store.getState())
  postCount.innerText=My_store.getState().post;
})

My_store.dispatch({type:'post/increment'})
console.log(My_store.getState())
My_store.dispatch({type:'post/increment'})
console.log(My_store.getState())
My_store.dispatch({type:'post/increment'})
console.log(My_store.getState())
My_store.dispatch({type:'post/decrement'})
console.log(My_store.getState())
My_store.dispatch({type:'post/incrementBy',payLoad:10})
console.log(My_store.getState())
