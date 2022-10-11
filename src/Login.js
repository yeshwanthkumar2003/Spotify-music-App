import React from 'react'
import './Login.css';
import {loginUrl} from './spotify';

function Login() {
  return (
    <div className="login">
        
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-768x234.jpg" alt='' />      {/*spotify logo*/}
      {/*login with button*/}
      <a href={loginUrl}>Login with Spotify</a>

    </div>
  )
}

export default Login;
