import React from "react";
import { Container } from "./styles";
import { Avatar, Box } from "@material-ui/core";
import RewardModal from "../RewardModal";

const RewardScreen: React.FC = () => {
  return (
    <Container>
      <Box className="content">
        <Avatar
          className="avatar"
          src="https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4"
          alt="Avatar"
        />
        <Box className="reward-info">
          <p>John Doe says: </p>
          <p>You have worked hard last week and we've decided to reward you.</p>
        </Box>
        <RewardModal />
      </Box>
    </Container>
  );
};

export default RewardScreen;
