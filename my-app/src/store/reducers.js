import ACTypes from "./types";
let allInvestors = [];
let initialUser = {};
const initialState = {
  user: initialUser,
  investor: allInvestors
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTypes.CHECK_AUTH:
      initialUser = {
        user: action.payload.user,
        isAuth: action.payload.isAuth,
        status: action.payload.status,
      };
      allInvestors = action.payload.data1;
      console.log(initialUser);
      console.log(allInvestors);
      return { ...state, user: initialUser, investor: allInvestors };

      case ACTypes.AUTH:
        initialUser = {
          user: action.payload.user,
          isAuth: action.payload.isAuth,
          status: action.payload.status,
        };
        console.log(initialUser);
        return { ...state, user: initialUser };

    default:
      return state;
  }
};
