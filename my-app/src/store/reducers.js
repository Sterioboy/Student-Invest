import ACTypes from "./types";
let allConnections = [];
let allInvestors = [];
let initialUser = {};
let initialProfile = {};
const initialState = {
  user: initialUser,
  investor: allInvestors,
  profile: initialProfile,
  connections: allConnections,
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
      console.log(initialProfile);
      return { ...state, profile: initialProfile };

    case ACTypes.UPDATE_CONNECTIONS:
      allConnections = [
        ...allConnections,
        {
          id: action.payload.id,
          investor: action.payload.investor,
          student: action.payload.student,
          status: action.payload.status,
        },
      ];
      return { ...state, connections: allConnections };

    case ACTypes.CONNECTIONS:
      allConnections = action.payload.data;
      return { ...state, connections: allConnections };

    default:
      return state;
  }
};
