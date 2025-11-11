import ClubDetails from "./ClubDetails";
import { FaArrowRightLong } from "react-icons/fa6";
import './Login.css'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
function Login() {
    return (
        <div className="LoginOuter">
            <div className="Login">
                <h1>Login</h1>
                <a href="register">Forgot Your Password</a>

                <form action="">
                    <input type="email" name="Email" id="Email" placeholder="Email" />
                    <input type="password" name="Pass" id="pass" placeholder="Password" />
                    <div className="checkBox">
                        <input type="checkbox" name="condition" id="conditions" />
                        <p>Keep me logged in - applies to all log in options below. More info</p>
                    </div>
                    <button>Email Login <FaArrowRightLong /> </button>
                </form>
                <div className="LoginUp">
                    <div className="icons">
                        <FaGoogle />
                    </div>
                    <div className="icons">
                        <FaApple />
                    </div>
                    <div className="icons">
                        <FaFacebookSquare    />
                    </div>
                </div>
                <p className="">By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</p>
            </div>

            <ClubDetails></ClubDetails>
           
        </div>
    )
}

export default Login;