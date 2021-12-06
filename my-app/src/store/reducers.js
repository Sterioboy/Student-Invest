import ACTypes from "./types";
let initialInvestors = [
  {
    id: 1,
    user: "John Brown",
    language: "English, French",
    country: "Canada",
    info: "Aliquam congue pulvinar aliquam. Nunc vehicula at libero et euismod. Integer at viverra mi. Donec.",
    image: null,
    interests: "business, finance",
  },
  {
    id: 2,
    user: "John Smith",
    language: "English, French",
    country: "Canada",
    info: "Aliquam congue pulvinar aliquam. Nunc vehicula at libero et euismod. Integer at viverra mi. Donec.",
    image: null,
    interests: "business, finance"
  },
];
let initialUniversities = [
  {
    id: 1,
    user: "McGill University",
    country: "Canada",
    info: "Integer convallis ultricies mauris eu facilisis. Integer fermentum hendrerit lorem eu pulvinar. Ut elementum nisl et faucibus sollicitudin. Aliquam scelerisque."
  }
];
let initialUser = {};
let initialProfile = {};
const initialState = {
  user: initialUser,
  profile: initialProfile,
  investor: initialInvestors,
  university: initialUniversities,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
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
        language: action.payload.language
      }

    default:
      return state;
  }
};
