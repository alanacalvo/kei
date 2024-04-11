import "./EstimateForm.scss";
import "../../global.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function EstimateForm() {
  const [confirmModal, setConfirmModal] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i0bk3ke",
        "template_0em3c54",
        form.current,
        "qYV74PArVWs1Efxqc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    console.log("submitted");
    setConfirmModal(true);
  };

  const handleChange = () => {
    console.log("change");
  };

  return (
    <form ref={form} id="contact-form" onSubmit={sendEmail}>
      <Paper
        elevation={16}
        sx={{
          padding: 4,
          margin: 4,
          width: 500,

          color: "#2A3B73",
          borderRadius: "20px",
        }}
      >
        {!confirmModal ? (
          <FormControl variant="standard">
            <FormLabel
              component="legend"
              sx={{
                fontSize: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Request Free Estimate
            </FormLabel>
            <FormGroup>
              <FormControl sx={{ margin: 1, width: 475 }}>
                <InputLabel>Name</InputLabel>
                <OutlinedInput
                  label="Name Name"
                  name="user_name"
                  type="text"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ margin: 1 }}>
                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  type="email"
                  name="user_email"
                  label="Email"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ margin: 1 }}>
                <InputLabel htmlFor="component-outlined">
                  Phone Number
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  label="Phone Number"
                  type="number"
                  name="user_number"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ margin: 1 }}>
                <InputLabel htmlFor="component-outlined">
                  Street Address
                </InputLabel>
                <OutlinedInput
                  id="component-outlined"
                  label="Street Address"
                  type="text"
                  name="user_address"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl sx={{ margin: 1 }}>
                <InputLabel htmlFor="component-outlined">
                  Job Details
                </InputLabel>
                <TextField
                  id="component-outlined"
                  // label="Job Details"
                  name="message"
                  onChange={handleChange}
                />
              </FormControl>
            </FormGroup>
            <Button type="submit" className="button">
              Submit
            </Button>
          </FormControl>
        ) : (
          <div className="formSubmitted">
            <h1>Thank You!</h1>
            <h3>
              Your request has been submitted. We will get back with you soon.
            </h3>
          </div>
        )}
      </Paper>
    </form>
  );
}

export default EstimateForm;
