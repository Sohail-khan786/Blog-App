import { styled } from "@mui/material/styles";

export const RightBarContainer = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingRight: theme.spacing(1),
  color: "white",
  height: "90vh",
  position: "sticky",
  top: "0",
  backgroundColor: "white",
  color: "#555",
  display: "flex",
  flexDirection: "column",
}));
