import { Grid } from "@mui/material";
import Feed from "./components/Feed/Feed";
import LeftBar from "./components/LeftBar/LeftBar";
import NavBar from "./components/Navbar/NavBar";
import RightBar from "./components/RightBar/RightBar";

function App() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={2}>
          <LeftBar />
        </Grid>
        <Grid item xs={10} sm={7}>
          <Feed />
        </Grid>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
          }}
          md={3}
        >
          <RightBar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
