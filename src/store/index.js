import { createStore } from "redux";

// initial state
const initialState = {
  count: 25,
  user: {
    name: "Manish"
  }
};

// action creator
export const increaseCount = (num) => ({
  type: "INCREASE_COUNT",
  number: num
});

export const decreaseCount = () => ({
  type: "DECERASE_COUNT"
});

export const updateUserName = (name) => ({
  type: "UPDATE_USERNAME",
  name
});

// reducer
function mainReducer(state, action) {
  switch (action.type) {
    case "INCREASE_COUNT": {
      return {
        ...state,
        count: state.count + action.number
      };
      break;
    }
    case "DECREASE_COUNT": {
      return {
        ...state,
        count: state.count - 1
      };
      break;
    }
    case "UPDATE_USERNAME": {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name
        }
      };
      break;
    }
    default:
      return state;
  }
}

const store = createStore(mainReducer, initialState);

export default store;
