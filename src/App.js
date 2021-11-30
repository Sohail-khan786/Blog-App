import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

function App() {
  return (
    <div>
      <Button variant="contained" endIcon={<DeleteIcon />}>
        Material Ui
      </Button>
    </div>
  );
}

export default App;
