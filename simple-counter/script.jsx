//Reducer
const counter = (state = -1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//Store setup
const { createStore } = Redux;
const store = createStore(counter);

//Render to DOM
const render = () => {
  document.body.innerText = store.getState();
};

//The callback, render(), will be called on changes in store
store.subscribe(render);

//Render initial state
render();

//React to user action (event listener)
document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
