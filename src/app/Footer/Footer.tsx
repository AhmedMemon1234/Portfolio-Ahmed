import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export default function Footer(){
    return(
        <div className="Parentfooter">
 <div className="Childfooter">
  
    <ul className="FooterParent">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="allright">
        <p>&copy;2024 Ahmed Memon. All Rights Reserved.</p>
    </div>
    <div className="designby">
<h1>Design By <span>AhmedMemon</span></h1>
    </div>
    
 </div>
        </div>
    )
}