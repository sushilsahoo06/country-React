import productList from "./FakeProduct";
const initialState = {
  product: productList,
};

export default function ProductReducer(state = initialState, action) {
  return state;
}
