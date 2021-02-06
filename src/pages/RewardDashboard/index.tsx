import React from "react";
import Home from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Email from "@material-ui/icons/Email";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";

import RewardScreen from "../../components/RewardScreen";

import { Container, MainContent } from "./styles";

const RewardDashboard: React.FC = () => {
  return (
    <Container>
      <aside>
        <div className="menu">
          <div className="menu-item active">
            <MonetizationOnIcon color="primary" />
            Rewards
          </div>
          <div className="menu-item">
            <Home color="primary" />
            Home
          </div>
          <div className="menu-item">
            <Email color="primary" />
            Messages
          </div>
          <div className="menu-item">
            <AssignmentIndIcon color="primary" />
            Tasks
          </div>
          <div className="menu-item">
            <DashboardIcon color="primary" />
            Dashboard
          </div>
          <div className="menu-item">
            <AssessmentIcon color="primary" />
            Reports
          </div>
        </div>

        <div className="note">
          <p>
            "Make the most of your time everyday. We can never go back and do it
            all over again."
          </p>
        </div>
      </aside>
      <MainContent>
        <RewardScreen />
      </MainContent>
    </Container>
  );
};

export default RewardDashboard;
