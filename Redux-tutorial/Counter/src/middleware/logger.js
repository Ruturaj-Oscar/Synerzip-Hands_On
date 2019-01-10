const logger = store => next => action => {
  if (action.type === "INCREMENT") action.type = "DECREMENT";
  else action.type = "INCREMENT";
  console.log("Action : " + action.type + "  State : " + store.getState());
  next(action);
};
export default logger;
