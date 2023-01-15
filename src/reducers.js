import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  RESET_COUNT,
  SET_COUNT,
  CLICK_CARD,
  UNCLICK_CARD,
} from "./constants";

const intialStateSearch = {
  searchField: "",
};
export const searchRobots = (state = intialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const intialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};
export const requestRobots = (state = intialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, robots: action.payload };
    default:
      return state;
  }
};

const initialClickCount = {
  count: 0,
};
export const setCount = (state = initialClickCount, action = {}) => {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, count: state.count + 1 };
    case RESET_COUNT:
      return { ...state, count: (state = 0) };
    default:
      return state;
  }
};

const initalSelection = {
  selectedCard: false,
};
export const selectCard = (state = initalSelection, action = {}) => {
  switch (action.type) {
    case CLICK_CARD:
      return { ...state, selectCard: true };
    case UNCLICK_CARD:
      return { ...state, selectCard: false };
    default:
      return state;
  }
};
