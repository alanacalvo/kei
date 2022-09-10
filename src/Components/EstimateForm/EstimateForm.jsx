import './EstimateForm.scss';
import { useRef } from 'react';

function EstimateForm() {

  const form = useRef();

  const sendEmail = () => {
    console.log('hello world')

  }
  return (
    <div className='formContainer'>
      <h2>Request a Free Estimate</h2>
      <form ref={form} onSubmit={sendEmail}>
        {/* <label>First Name:</label> */}
        <input type="text" id="firstName" placeholder="First Name"/>
        {/* <label>Last Name:</label> */}
        <input type="text" id="lastName" placeholder="Last Name"/>
        {/* <label>Email:</label> */}
        <input type="email" id="email" placeholder="Email"/>
        {/* <label>Phone Number:</label> */}
        <input type="number" id="phoneNumber" placeholder="Phone Number"/>
        {/* <label>County:</label> */}
        <select type="text" id="county" placeholder="County">
          <option value="Volusia">Volusia</option>
          <option value="Lake">Lake</option>
        </select>
        {/* <label>Street Address:</label> */}
        <input type="text" id="streetAddress" placeholder="Street Address"/>
        {/* <label>About the Job:</label> */}
        <textarea type="text" id="jobDetails" placeholder="Job Details"/>
        <button type="submit" className='button'>Submit</button>
      </form>
    </div>
  )
}

export default EstimateForm