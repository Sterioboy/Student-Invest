import ACTypes from "./types";

export const checkAuthAC = (data, data1) => {
  const { status, user, isAuth } = data;

  return { type: ACTypes.CHECK_AUTH, payload: { isAuth, user, status, data1 } };
};

export const authAC = (data) => {
  const { status, user, isAuth } = data;

  return { type: ACTypes.AUTH, payload: { isAuth, user, status } };
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
      photo: formEl.current.photoProfile.value,
      info: formEl.current.infoProfile.value,
      interests: formEl.current.interestsProfile.value,
      country: formEl.current.countryProfile.value,
      language: formEl.current.languageProfile.value,
    }),
  });

  const data = await res.json();
  console.log(data);

  //Catch errror
  if (data.err) {
    return alert(data.err);
  }
};
