import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import styled from './login.module.css'

function SignUp() {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();  
    const Next = () => {
      let _data = {
        name: name,
        mobile: mobile,
        email: email,
        password:password
      };
      fetch("http://localhost:8000/signup", {
        method: "POST",
        body: JSON.stringify(_data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    }  
  return (
    <div>       
        <p>Login using</p>  
        <div className={styled.login_with_fb}> 
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt='fb_login'/>
            <img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png' alt='google_login' />
        </div>  
        <p>or</p>
      <input
            className={styled.Login_input}
            type='text'
            placeholder='Name'
            onChange={(e)=> setName(e.currentTarget.value)}
        />   
        <br/>  
      <input
            className={styled.Login_input}
            type="number"
            placeholder='Mobile Number'
            onChange={(e)=> setMobile(e.currentTarget.value)}
        />  
        <br/>    
      <input
            className={styled.Login_input}
            type='text'
            placeholder='Email'
            onChange={(e)=> setEmail(e.currentTarget.value)}
        />
        <br/>    
      <input
          className={styled.Login_input}
          type="password"
          placeholder='Set Password (Optional)'
          onChange={(e)=> setPassword(e.currentTarget.value)}
        /> 
        <br/>    
      <input
          className={styled.login_btn}
          type='submit'
          value='Next'
          onClick={Next}
        />   
        <p>Already Registered?</p>  
      {/* <Link to=''>Login</Link> */}
    </div>
  )
}
export default SignUp