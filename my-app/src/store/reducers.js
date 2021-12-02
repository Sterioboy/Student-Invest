import ACTypes from './types';

let initialUser = {};
const initialState = {
  user: initialUser
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTypes.AUTH:
      initialUser = {email: action.payload.email, name: action.payload.name, status: action.payload.status};
      return { ...state, parrot_input: initialUser };

    default:
      return state;
  }
};
