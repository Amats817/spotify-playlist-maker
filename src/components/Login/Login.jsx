import React from 'react'
import { loginToSpotify } from '../../Spotify'
import './login.css'
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"

const Login = () => {
  return (
    <div>
      <div className="top">
        <div className="header">
              <h1>Jammming</h1>
              <h3>A Spotify Playlist Maker</h3>
          </div>
          <div className="login">
            <button onClick={loginToSpotify} id="login-btn">Login to Spotify</button>
        </div>
      </div>
        <div className="footer">
            <h4>Created By: Mark Joshua Sto Domingo</h4>
            <hr />
            <div className="links">
            <a href="https://github.com/Amats817" target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mjgsd/" target='_blank'  rel="noreferrer"><CiLinkedin /></a>
            </div>
        </div>
    </div>
  )
}

export default Login
