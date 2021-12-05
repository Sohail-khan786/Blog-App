import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ModalContentWrapper } from "./styles";

export const AddPostModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContentWrapper>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add a Post
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Add a PostAdd a PostAdd a PostAdd a Post.
        </Typography>
      </ModalContentWrapper>
    </Modal>
  );
};
