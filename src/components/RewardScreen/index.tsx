import React, { FormEvent, useCallback, useState } from "react";
import { Container } from "./styles";
import { Avatar, Box, Button, Input } from "@material-ui/core";
import { toast } from "react-toastify";
import RewardModal from "../RewardModal";
import { Close, Public } from "@material-ui/icons";

const RewardScreen: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayReward, setDisplayReward] = useState(true);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    setInputValue("");
    toast.success("Your message has been successfully sent to John.");
  }, []);

  const handleCloseRewardScreen = useCallback(() => {
    setDisplayReward(false);
  }, []);

  return (
    <Container displayReward={displayReward}>
      <Box className="content">
        <Avatar
          className="avatar"
          src="https://avatars.githubusercontent.com/u/33661312?s=460&u=a140ec4f9f80ce1bcbcbf4229ad38c83da447040&v=4"
          alt="Avatar"
        />
        <Box className="reward-info">
          <p>
            <span>John Doe</span> says:{" "}
          </p>
          <p>"We'd like to reward you for your hard work."</p>
          <p>
            <span>02/04/2021</span>
          </p>
        </Box>
        <div className="modal-button">
          <Public color="primary" />
          <RewardModal />
        </div>
        <Close className="close-button" onClick={handleCloseRewardScreen} />
        <form onSubmit={handleSubmit}>
          <Input
            className="input"
            multiline
            placeholder="Reply to the sender here"
            rowsMax="2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            inputProps={{ style: { textAlign: "center" } }}
          />
          <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RewardScreen;
