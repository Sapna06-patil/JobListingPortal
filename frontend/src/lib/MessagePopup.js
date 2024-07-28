import { Snackbar, Slide } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const MessagePopup = (props) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.setOpen(false);
  };

  return (
    <Snackbar
      open={props.open}
      onClose={handleClose}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position at the top center
    >
      <Alert onClose={handleClose} severity={props.severity} variant="filled">
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default MessagePopup;
