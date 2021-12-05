import { styled, alpha } from "@mui/material/styles";

export const RightBarContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: theme.spacing(10),
  color: "white",
  height: "90vh",
  position: "sticky",
  top: "0",
  [theme.breakpoints.up("sm")]: {
    backgroundColor: "white",
    color: "#555",
    borderLeft: "1px solid #ece7e7",
  },
}));
