import React, { useState } from 'react'
import styled from './login.module.css'
// import {Link} from 'react-router-dom'
import SignUp from './SignUp'
import { Modal } from 'antd';

function Login({ setIsModalVisible }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }

  const Next = () => {
    let _data = {
      email: email,
      password: password
    };
    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => {
        console.log(err);
        warning();
      });
  }

  // signup Model -->
  const [isModalVisible, setIsModalVisible2] = useState(false);

  const showModal = () => {
    setIsModalVisible2(true);
  };

  const handleOk = () => {
    setIsModalVisible2(false);
  };

  const handleCancel = () => {
    setIsModalVisible2(false);
  };




  return (
    <div>
      <input
        className={styled.Login_input}
        type='text'
        placeholder='Your Email ID or Mobile Number'
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      <input
        className={styled.Login_input}
        type="password"
        placeholder='Password'
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <input
        className={styled.login_btn}
        type='submit'
        value='Next'
        onClick={() => {
          Next();
          setEmail('');
          setPassword('');
        }}
      />
      <br />
      <p>Login using</p>
      <div className={styled.login_with_fb}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt='fb_login' />
        <img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png' alt='google_login' />
      </div>
      <p>New User?</p>
      <p>Sign-up to enjoy 40% faster checkout</p>
      {/* <Link to=''>Sign-up</Link> */}
      <button onClick={() => {
        showModal();
        setIsModalVisible(false)
      }}>Sign-up</button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <SignUp setIsModalVisible2={setIsModalVisible2} />
      </Modal>
    </div>
  )
}
export default Login