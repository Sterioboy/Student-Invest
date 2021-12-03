import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainNav from './navigate/MainNav';
import Routers from "./routes/Routers";
import { useDispatch } from "react-redux";
import { authAC } from './store/actions';

function App() {
  //Check if user isAuth
  //Connect to Back-end
  const dispatch = useDispatch();
  React.useEffect(() => {
    (async () => {
      const res = await fetch("/auth/isAuth");
      const data = await res.json();
      //Catch errror
      if (data.err) {
        return alert(data.err);
      }
      console.log(data);
      dispatch(authAC(data));
    })();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <MainNav />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
