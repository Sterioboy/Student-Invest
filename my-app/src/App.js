import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Profile from './pages/Profile';
import Routers from "./routes/Routers";

function App() {
  return (
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
}

export default App;
