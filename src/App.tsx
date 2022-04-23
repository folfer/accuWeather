import React, { useEffect } from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardState from "./context/dashboard/DashboardState";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
    });
  }, []);
  return (
    <DashboardState>
      <Dashboard />
    </DashboardState>
  );
};

export default App;
