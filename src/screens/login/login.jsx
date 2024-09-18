import React, { useRef } from 'react'


const Login = () => {
  const email = useRef();
  const passward = useRef();

  return (
    <>
    <h1>Login user</h1>
    <form >
      <input type="email" placeholder='Enter your email' ref={email}/>
      <input type="password" placeholder='Enter your password' ref={passward}/>

      <button>Login</button>


    </form>
    </>
  )
}

export default Login






























