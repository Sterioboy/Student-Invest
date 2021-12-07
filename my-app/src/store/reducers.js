import ACTypes from "./types";
let allInvestors = [];
let initialUser = {};
let initialProfile = {};
const initialState = {
  user: initialUser,
  investor: allInvestors,
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

    case ACTypes.PROFILE:
      initialProfile = {
        photo: action.payload.photo,
        info: action.payload.info,
        interests: action.payload.interests,
        country: action.payload.country,
        language: action.payload.language,
      };
      console.log(initialProfile)
      return { ...state, profile: initialProfile };

    default:
      return state;
  }
};
