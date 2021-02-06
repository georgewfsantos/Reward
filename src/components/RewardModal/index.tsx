import React, { useCallback, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { toast } from "react-toastify";
import { Avatar, Box, Button } from "@material-ui/core";

import { ContentWrapper } from "./styles";

const RewardModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleAccept = useCallback(() => {
    toast.success(
      "You have accepted the reward. Write a reply to John on the screen below."
    );
    setOpen(false);
  }, []);

  return (
    <>
      <Button
        className="reward-button"
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        You have a reward !
      </Button>
      <Modal open={open} onClose={handleClose} className="modal">
        <ContentWrapper>
          <h2>Contratulations !!!! You've earned :</h2>
          <div className="reward-content">
            <h1>The Hard-Worker Badge</h1>
            <Avatar
              className="reward-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmZ9P9Wd3gGAittctdRYD5ghsoYQmUmB8-g&usqp=CAU"
              alt="Avatar"
            />
            <h2>It's worth $100</h2>
          </div>
          <Box className="reward-buttons">
            <Button variant="contained" color="primary" onClick={handleAccept}>
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
