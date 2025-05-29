import { ADD_FAVOURITE_COMPANY } from "../action/action";

const initialState = {
  companies: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };

    default:
      return state;
  }
};

export default favouriteReducer;
