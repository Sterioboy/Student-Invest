import ACTypes from './types';

let initialUser = {};
const initialState = {
  user: initialUser
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTypes.AUTH:
      initialUser = {user: action.payload.user, isAuth: action.payload.isAuth, status: action.payload.status};
      console.log(initialUser);
      return { ...state, user: initialUser };

    default:
      return state;
  }
};
