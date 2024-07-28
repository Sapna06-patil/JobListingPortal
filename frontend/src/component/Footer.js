import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    margin: theme.spacing(0, 2), // Add spacing between links
    color: theme.palette.common.white,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  dialogContent: {
    paddingBottom: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState({
    about: false,
    privacy: false,
    contact: false,
  });

  const handleOpen = (section) => {
    setOpen({ ...open, [section]: true });
  };

  const handleClose = (section) => {
    setOpen({ ...open, [section]: false });
  };

  return (
    <>
      <Box component="footer" className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            {" "}
            {/* Center the text */}
            &copy; 2024 Job Listing Portal. All Rights Reserved.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Link
              href="#"
              className={classes.link}
              onClick={() => handleOpen("about")}
            >
              About Us
            </Link>
            <Link
              href="#"
              className={classes.link}
              onClick={() => handleOpen("privacy")}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className={classes.link}
              onClick={() => handleOpen("contact")}
            >
              Contact Us
            </Link>
          </Box>
        </Container>
      </Box>

      {/* About Us Dialog */}
      <Dialog open={open.about} onClose={() => handleClose("about")}>
        <DialogTitle>About Us</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Typography variant="body1" gutterBottom>
            We are a leading job listing portal dedicated to connecting
            employers with top talent. Our mission is to provide a seamless job
            search experience and help candidates find their dream jobs.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("about")} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Privacy Policy Dialog */}
      <Dialog open={open.privacy} onClose={() => handleClose("privacy")}>
        <DialogTitle>Privacy Policy</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Typography variant="body1" gutterBottom>
            Your privacy is important to us. We are committed to protecting your
            personal information and ensuring its confidentiality.
          </Typography>
          <Typography variant="body2">
            Read our full privacy policy to understand how we collect, use, and
            protect your data.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("privacy")} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Contact Us Dialog */}
      <Dialog open={open.contact} onClose={() => handleClose("contact")}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Typography variant="body1" gutterBottom>
            Have questions or need assistance? Get in touch with us!
          </Typography>
          <Typography variant="body2">Email:</Typography>
          <Typography variant="body2">Phone: </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("contact")} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Footer;
