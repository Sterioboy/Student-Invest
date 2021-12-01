import ACTypes from './types';

const initialState = {
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    /* case ACTypes.PARROT_INPUT:
      parrotStr = action.payload.value;
      return { ...state, parrot_input: parrotStr }; */

    default:
      return state;
  }
};
