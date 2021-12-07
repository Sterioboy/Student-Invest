import ACTypes from "./types";

export const checkAuthAC = (data, data1) => {
  const { status, user, isAuth } = data;

  return { type: ACTypes.CHECK_AUTH, payload: { isAuth, user, status, data1 } };
};

export const authAC = (data) => {
  const { status, user, isAuth } = data;

  return { type: ACTypes.AUTH, payload: { isAuth, user, status } };
};

export const profileAC = (data) => {
  console.log(data);
  const { info, interests, language, country } = data;

  return { type: ACTypes.PROFILE, payload: { info, interests, language, country } };
};

export const updateConnectionsAC = (data) => {
  console.log(data);
  const { id, investor, student, status } = data;

  return { type: ACTypes.UPDATE_CONNECTIONS, payload: { id, investor, student, status } };
};

export const connectionsAC = (data) => {
  console.log(data);

  return { type: ACTypes.CONNECTIONS, payload: { data } };
};

//Fetch Requests - Thunk
//Sign Up
export const thunkSignUpAC = (e, formEl) => async (dispatch) => {
  e.preventDefault();

  const res = await fetch("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formEl.current.signUpEmail.value,
      login: formEl.current.signUpName.value,
      status: formEl.current.signUpStatus.value,
      password: formEl.current.signUpPassword.value,
    }),
  });

  const data = await res.json();
  console.log(data);

  //Catch errror
  if (data.err) {
    return alert(data.err);
  }

  dispatch(authAC(data));
};

//Sign In
export const thunkSignInAC = (e, formEl) => async (dispatch) => {
  e.preventDefault();

  const res = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formEl.current.signInEmail.value,
      password: formEl.current.signInPassword.value,
    }),
  });

  const data = await res.json();
  console.log(data);

  //Catch errror
  if (data.err) {
    return alert(data.err);
  }

  dispatch(authAC(data));
};

export const thunkLogOutAC = () => async (dispatch) => {
  await fetch("/auth/logout");
  dispatch(authAC({ status: null, user: null, isAuth: false }));
};

export const thunkProfileAC = (e, formEl) => async (dispatch) => {
  e.preventDefault();

  const res = await fetch("/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      photo: null,
      info: formEl.current.infoProfile.value,
      interests: formEl.current.interestsProfile.value,
      country: formEl.current.countryProfile.value,
      language: formEl.current.languageProfile.value,
    }),
  });

  const data = await res.json();
  console.log(data);
  dispatch(profileAC(data));
};

export const thunkConnectionAC = (id) => async (dispatch) => {
  const res = await fetch("/connections", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      investor_id: id,
      status: false
    }),
  });
  const data = await res.json();

  //Catch errror
  if (data.err) {
    return alert(data.err);
  }

  console.log(data);
  dispatch(updateConnectionsAC(data));
}
