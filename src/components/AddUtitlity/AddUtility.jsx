import { FileCopy, Print, Save, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

export const AddUtility = () => {
  const actions = [
    { icon: <FileCopy />, name: "Copy" },
    { icon: <Save />, name: "Save" },
    { icon: <Print />, name: "Print" },
    { icon: <Share />, name: "Share" },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", bottom: 32, right: 32 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
};
