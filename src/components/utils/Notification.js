import { Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
const Notification = (props) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    props.handleClose();
  };
  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={props.type} sx={{ width: "100%" }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};
export default Notification;
