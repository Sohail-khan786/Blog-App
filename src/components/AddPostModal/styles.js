import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";

export const ModalContentWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  backgroundColor: "white",
  border: "1px solid #555",
  borderRadius: "15px",
  boxShadow: 24,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));
