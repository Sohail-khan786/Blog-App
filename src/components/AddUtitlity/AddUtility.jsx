import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React, { useState } from "react";
import { AddPostModal } from "../AddPostModal/AddPostModal";

export const AddUtility = () => {
  const actions = [
    { icon: <AddAPhotoIcon />, name: "Add Post" },
    { icon: <PersonAddIcon />, name: "Add Friend" },
  ];

  const [openAddPostModal, setOpenAddPostModal] = useState(false);
  const handleOpenAddPostModal = () => setOpenAddPostModal(true);
  const handleCloseAddPostModal = () => setOpenAddPostModal(false);

  const handleSpeedDialAction = (actionName) => {
    if (actionName === "Add Post") {
      handleOpenAddPostModal();
    } else if (actionName === "Add Friend") {
      console.log(
        "🚀 ~ file: AddUtility.jsx ~ line 14 ~ handleSpeedDialAction ~ actionName",
        actionName
      );
    }
  };

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 32, right: 32, zIndex: 2 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e) => {
              handleSpeedDialAction(action.name);
            }}
          />
        ))}
      </SpeedDial>
      <AddPostModal
        open={openAddPostModal}
        handleClose={handleCloseAddPostModal}
      />
    </>
  );
};
