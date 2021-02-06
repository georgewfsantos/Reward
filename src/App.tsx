import React from "react";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "../src/styles/global";

import RewardDashboard from "./pages/RewardDashboard";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <RewardDashboard />
      <ToastContainer autoClose={10000} />
    </>
  );
};

export default App;
