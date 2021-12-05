import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
  status: {
    danger: orange[500],
  },
  fontSize: {
    main: "18px",
    secondary: "12px",
    heading: "24px",
  },
});
