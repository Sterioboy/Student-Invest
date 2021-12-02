import ACTypes from './types';

export const SignUpAC = (data) => {
  return { type: ACTypes.AUTH, payload: { email: data.email, name: data.name, status: data.status } };
};

//Fetch Requests - Thunk
export const thunkSignUpAC = (e, formEl) => async (dispatch) => {
  e.preventDefault();
  console.log(formEl.current.signUpEmail.value);
  console.log(formEl.current.signUpName.value);
  console.log(formEl.current.signUpStatus.value);
  console.log(formEl.current.signUpPassword.value);

  /* const res = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formEl.current.signUpEmail.value,
      name: formEl.current.signUpName.value,
      status: formEl.current.signUpStatus.value,
      password: formEl.current.signUpPassword.value
    }),
  });

  const data = await res.json(); */

  dispatch(SignUpAC());
};
