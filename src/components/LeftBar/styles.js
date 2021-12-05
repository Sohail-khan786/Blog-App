import { styled, alpha } from "@mui/material/styles";
import { border, fontSize } from "@mui/system";

export const ItemWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  margin: theme.spacing(3),

  cursor: "pointer",
  paddingTop: theme.spacing(1),
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(0),
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
}));

export const ItemDescription = styled("div")(({ theme }) => ({
  fontSize: "18px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const LeftBarContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: theme.spacing(10),
  color: "white",
  height: "100vh",
  [theme.breakpoints.up("sm")]: {
    backgroundColor: "white",
    color: "#555",
    border: "1px solid #ece7e7",
  },
}));

export const IconWrapper = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(1),
}));
