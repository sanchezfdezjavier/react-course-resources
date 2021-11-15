import { createStore } from "redux";

const conuterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "incrementbyx") {
    console.log("action incrementbyx");
    return {
      counter: state.counter + action.value,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(conuterReducer);

export default store;
