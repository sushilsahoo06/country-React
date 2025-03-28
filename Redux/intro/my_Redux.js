export function My_store(reducer){
  let state
  const listener=[]
  const store={
    getState(){
      return state
    },
    getPatch(action){
      state=reducer(state,action)
    },
    subscribe(listener){
      listener.push(listener)
      listener.forEach(listener => {
        listener()
      });
    } 
  }
  store.dispatch({type:'@@INIT'})
  return store
}