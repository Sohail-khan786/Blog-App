import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const ModalContentWrapper = styled(Box)(({ theme }) => ({
  width: "40%",
  backgroundColor: "white",
  border: "1px solid #555",
  borderRadius: "15px",
  boxShadow: 24,
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    width: "100vh",
    height: "100vh",
  },
}));

export const FormItemWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(4),
}));
