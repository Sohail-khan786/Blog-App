import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import { ModalContentWrapper, FormItemWrapper } from "./styles";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AddPostModal = ({ open, handleClose }) => {
  const [postVisibility, setPostVisibility] = React.useState("");

  const handleChangeOfPostVisibility = (event) => {
    setPostVisibility(event.target.value);
  };

  const handlePostFormSubmit = () => {
    console.log(
      "🚀 ~ file: AddPostModal.jsx ~ line 33 ~ handlePostFormSubmit ~ handlePostFormSubmit"
    );
    setSuccessSnackbar(true);

    handleClose();
  };

  const [openSuccessSnackbar, setSuccessSnackbar] = React.useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessSnackbar(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ModalContentWrapper>
          <form autoComplete="off">
            <FormItemWrapper>
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                label="Title"
                variant="standard"
                required
              />
            </FormItemWrapper>
            <FormItemWrapper>
              <TextField
                id="outlined-multiline-static"
                sx={{ width: "100%" }}
                label="Description"
                multiline
                rows={4}
              />
            </FormItemWrapper>
            <FormItemWrapper>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Visibility
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={postVisibility}
                  label="Visibility"
                  onChange={handleChangeOfPostVisibility}
                >
                  <MenuItem value={"Public"}>Public</MenuItem>
                  <MenuItem value={"Private"}>Private</MenuItem>
                  <MenuItem value={"Self"}>Self</MenuItem>
                </Select>
              </FormControl>
            </FormItemWrapper>
            <FormItemWrapper>
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Who Can Comment</FormLabel>
                <RadioGroup
                  aria-label="comment-permission"
                  defaultValue="My Friends"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Everybody"
                    control={<Radio />}
                    label="Everybody"
                  />

                  <FormControlLabel
                    value="My Friends"
                    control={<Radio />}
                    label="My Friends"
                  />

                  <FormControlLabel
                    value="Nobody"
                    control={<Radio />}
                    label="Nobody"
                  />

                  <FormControlLabel
                    value="Custom"
                    control={<Radio />}
                    label="Custom (Premium)"
                    disabled
                  />
                </RadioGroup>
              </FormControl>
            </FormItemWrapper>
            <FormItemWrapper>
              <Button
                variant="outlined"
                sx={{ mr: 2 }}
                onClick={handlePostFormSubmit}
              >
                Create
              </Button>
              <Button variant="outlined" color="error" onClick={handleClose}>
                Cancel
              </Button>
            </FormItemWrapper>
          </form>
        </ModalContentWrapper>
      </Modal>
      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Post Created Successfully
        </Alert>
      </Snackbar>
    </>
  );
};
