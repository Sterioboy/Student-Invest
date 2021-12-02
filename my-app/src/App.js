import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainNav from './navigate/MainNav';
import Routers from "./routes/Routers";

function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
