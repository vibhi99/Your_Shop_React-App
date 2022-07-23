import React, {useState} from 'react'
import axios from 'axios'
import { NavLink, useHistory } from 'react-router-dom'
import signup from '../images/signup.jpg'



const Signup = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name:"", email:"", phone:"", password:""
    })
    
    
    let name, value
    
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name
        value = e.target.value
    
        setUser({...user, [name]:value})
    }

    const PostData = async (e) =>{
        e.preventDefault()
        const {name, email, phone, password} = user
        //console.log(name)
        var data = JSON.stringify({
            name, email, phone, password
          });
          
          var config = {
            method: 'post',
            url: '/api/register',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          const res = await axios(config)
          console.log(res.data)
          window.alert("USer added succesfully!")

          history.push('/login')
        
    }

    




    return (
        <>
            <section className="signup_section">
                <div className="container mt-5">
                    <div className="row signup_content">
                        <div className="signup_form">
                            <h2 className="form-title">SignUp</h2>
                            <form method="POST" className="register-form" id="register-form">

                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" 
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" 
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="Your Email" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone material-icons-name"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" 
                                    value={user.phone}
                                    onChange={handleInputs}
                                    placeholder="Your Phone Number" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" 
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Your Password" />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={PostData}/>
                                </div>

                            </form>
                        </div>
                        <div className="signup-image">
                                <figure>
                                    <img src={signup} alt="registrationform" />
                                    
                                </figure>
                                <NavLink className="alreadysignin" to="/login">Already an User?</NavLink>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
