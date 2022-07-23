import axios from 'axios'
import React, {useState} from 'react'
import { NavLink, useHistory} from 'react-router-dom'
import login from '../images/3071357.jpg'


const Login = () => {
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (e)=>{
            e.preventDefault()
            
            var data = JSON.stringify({
                username, password
              });
              
              var config = {
                method: 'post',
                url: '/api/login',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              const res = await axios(config)
              console.log(res.data)

              history.push("/")
          

    }
    return (
        <>
            <section className="signup_section">
                <div className="container mt-5">
                    <div className="row signup_content">
                        <div className="signup-image">
                                <figure>
                                    <img src={login} alt="loginform" />
                                    
                                </figure>
                                <NavLink className="alreadysignin" to="/signup">Create an account</NavLink>
                        </div>
                        <div className="signup_form">
                            <h2 className="form-title">Login</h2>
                            <form method="POST" className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="username">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="username" id="username" autoComplete="off" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your Password" />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="login" id="login" className="form-submit" onClick={loginUser} value="Login"/>
                                </div>

                            </form>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
