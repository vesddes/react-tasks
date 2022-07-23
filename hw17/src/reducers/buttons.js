import { DO_GREEN, DO_BLUE, DO_RED } from '../constants';

const initialValue = {
  color: undefined
};

export const colorReducer = (state = initialValue, action) => {
  switch (action.type) {
    case DO_GREEN: {
      return { color: 'green' };
    }
    case DO_BLUE: {
      return { color: 'blue' };
    }
    case DO_RED: {
      return { color: 'red' };
    }
    default: {
      return state;
    }
  }
};
