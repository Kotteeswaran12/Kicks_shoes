import ClubDetails from './ClubDetails';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import './Register.css'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Register = () => {
    return (
        <div className='RegisterOuter'>
            <div className="Login">
                <h1>Register</h1>
                <p >Sign up with</p>
                <div className="LoginUp">
                    <div className="icons">
                        <FaGoogle />
                    </div>
                    <div className="icons">
                        <FaApple />
                    </div>
                    <div className="icons">
                        <FaFacebookSquare />
                    </div>
                </div>
                <p>OR</p>
                <form action="">
                    <div className="Name">
                        <h1>Your Name</h1>
                        <input type="text" name="FirstName" id="fName" placeholder="First Name" />
                        <input type="text" name="LastName" id="lName" placeholder="Last Name" />
                    </div>
                    <div className="Gender">
                        <h1>Gender</h1>
                        <div className="GenderOuter">
                            <div className="male">
                                <input type="checkbox" name="gender" id="male" value={"male"} />
                                <label htmlFor="male">Male</label>
                            </div>

                            <div className="female">
                                <input type="checkbox" name="gender" id="female" value={"female"} />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div className="Others">
                                <input type="checkbox" name="gender" id="others" value={"others"} />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>

                    <div className="LoginDetails">
                        <h1>Login Details</h1>
                        <input type="email" name="email" id="email" placeholder='Email' />
                        <input type="password" name="pass" id="password" placeholder='Password' />
                        <p>Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number</p>

                    </div>

                    <div className="checkBox">

                        <input type="checkbox" name="condition" id="conditions" />
                        <p>Keep me logged in - applies to all log in options below. More info</p>
                    </div>
                    <button>Register <FaArrowRightLong /> </button>
                </form>


            </div>

            <ClubDetails></ClubDetails>

        </div>
    )
}

export default Register;