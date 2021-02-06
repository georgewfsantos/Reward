import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Avatar, Box, Button } from "@material-ui/core";

import { ContentWrapper } from "./styles";

const RewardModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className="reward-button"
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        You have a reward
      </Button>
      <Modal open={open} onClose={handleClose} className="modal">
        <ContentWrapper>
          <h1>A one-hundred-dollar gift card</h1>
          <Avatar
            className="reward-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmZ9P9Wd3gGAittctdRYD5ghsoYQmUmB8-g&usqp=CAU"
            alt="Avatar"
          />
          <h2>$100</h2>
          <Box className="reward-buttons">
            <Button variant="contained" color="primary">
              Accept
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Decline
            </Button>
          </Box>
        </ContentWrapper>
      </Modal>
    </>
  );
};

export default RewardModal;
