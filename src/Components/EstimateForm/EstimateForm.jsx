import './EstimateForm.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function EstimateForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i0bk3ke', 'template_0em3c54', form.current, 'qYV74PArVWs1Efxqc')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  }
  

  const handleChange = () => {
    console.log('change')
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Paper
        elevation={16}
        sx={{ padding: 4,      
              margin: 4,
              width: 500 }}>
        <FormControl variant='standard'>
          <FormLabel component='legend'
            sx={{ fontSize: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              Request Free Estimate</FormLabel>
          <FormGroup>
            <FormControl
              sx={{ margin: 1,
                    width: 475 }}>
              <InputLabel>First Name</InputLabel>
              <OutlinedInput 
                label="First Name"
                onChange={handleChange}/>
            </FormControl>
            <FormControl sx={{ margin: 1 }}>
              <InputLabel>Last Name</InputLabel>
              <OutlinedInput 
                label="Last Name"
                onChange={handleChange}/>
            </FormControl>
            <FormControl sx={{ margin: 1 }}>
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput 
                id="component-outlined"
                label="Email"
                onChange={handleChange}/>
            </FormControl>
            <FormControl sx={{ margin: 1 }}>
              <InputLabel htmlFor="component-outlined">Phone Number</InputLabel>
              <OutlinedInput 
                id="component-outlined"
                label="Phone Number"
                onChange={handleChange}/>
            </FormControl>
            <FormControl sx={{ margin: 1 }}>
              <InputLabel htmlFor="component-outlined">Street Address</InputLabel>
              <OutlinedInput 
                id="component-outlined"
                label="Street Address"
                onChange={handleChange}/>
            </FormControl>
            <FormControl sx={{ margin: 1 }}>
              <InputLabel htmlFor="component-outlined">Job Details</InputLabel>
              <TextField
                id="component-outlined"
                // label="Job Details"
                onChange={handleChange}/>
            </FormControl>
          </FormGroup>
        <Button type="submit" className='button'>Submit</Button>
        </FormControl>
      </Paper>
    </form>
  )
}

export default EstimateForm