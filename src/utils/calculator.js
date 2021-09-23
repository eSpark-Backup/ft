var delOff = false;

export const handleInitialState = (value, state) => {
  delOff = false
  return initialState;
};

export const initialState = {
  currentValue: "",
  operator: null,
  previousValue: null
};

export const handleNumber = (value, state) => {
  delOff = false
  if (state.currentValue === "0") {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`
  };
};

export const handleRemove = (value, state) => {
  if (delOff == false) {
    let del = state.currentValue.length
    let delArray = state.currentValue.slice(0, del - 1)
    if (delArray.length == 0) {
      return {
        currentValue: ""
      };
    } else {
      return {
        currentValue: delArray
      };
    }
  } else {
    null
  }
};

export const handleEqual = state => {
  delOff = true;
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null
  };

  if (operator === "/") {
    return {
      currentValue: previous / current,
      ...resetState
    };
  }

  if (operator === "*") {
    return {
      currentValue: previous * current,
      ...resetState
    };
  }

  if (operator === "+") {
    return {
      currentValue: previous + current,
      ...resetState,
    };

  }

  if (operator === "-") {
    return {
      currentValue: previous - current,
      ...resetState
    };
  }

  return state;
};

const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: ""
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return handleInitialState();
    case "posneg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case "Del":
      return handleRemove(value, state);
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    default:
      return state;
  }
};

export default calculator;
