
import './SideBar.css';
import { IoMdClose } from "react-icons/io";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { GoPersonFill } from "react-icons/go";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiWomenFill } from "react-icons/ri";
import { FaMars } from "react-icons/fa";


const SideBar = ({ menu, setMenu }) => {
    //    console.log(menu)/
    return (
        <div className={`sidebar ${menu ? 'open' : ''}`} onClick={() => { setMenu(false) }} >
            <div className="listOf">
                <div className="close" >
                    <h3>KICKS</h3>
                    <IoMdClose className='closeIcon' onClick={() => { setMenu(false) }} />
                </div>

                <div className="orderList">
                    <ul>
                        <li ><a href="#NewArrived"><HiMiniRocketLaunch className='Rocket'/><span>new</span> Drop</a></li>
                        <li className='Men'><FaMars className='Men' />Men</li>
                        <li className='Women' ><RiWomenFill className='Women' />Women</li>
                        <li className='Login' > <GoPersonFill className='img' /> Login</li>
                    </ul>
                </div>
                <div className="socialmedia">
                    <FaSquareXTwitter className='icons' size={"25px"} />
                    <FaInstagramSquare className='icons' size={"25px"} />
                    <FaYoutube className='icons' size={"25px"} />
                </div>
            </div>
        </div>
    )
}

export default SideBar