export function My_store(){
  let state
  const store={
    getState(){
      return state
    },
    getPatch(action){
      state=reducer(state,action)
    },
    subscribe(){

    }
  }
  return store;
}