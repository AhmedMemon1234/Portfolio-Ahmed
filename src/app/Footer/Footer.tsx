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
    <div className="connect">
<h1>Let&apos;s Connect!</h1>
    </div>
    <div className="connectparagraph">
<p>This Is The Way By From Which <br /> We Can Connect Together!!!!!!!</p>
    </div>
    <div className="iconcontainer">
   <a href="https://wa.me/03368952826" target="blank"><IoLogoWhatsapp /></a>
    </div>
    <div className="iconcontainer2"> 
    <a href="https://www.instagram.com/ahmedmemon038/" target="blank"><FaInstagramSquare/></a>
    </div>
    <div className="iconcontainer3">
    <a href="https://www.tiktok.com/@ahmedmemon642" target="blank"><AiFillTikTok/></a>
    </div>
    <div className="iconcontainer4">
   <a href="https://www.youtube.com/@DevilXOp-fv2jb" target="blank"><FaYoutube/></a>
    </div>
    <div className="iconcontainer5">
   <a href="https://www.linkedin.com/in/ahmed-memon-5550642b5/" target="blank"><FaLinkedin/></a>
    </div>
    <div className="iconcontainer6">
    <a href="https://github.com/AhmedMemon1234" target="blank"><FaGithubSquare/></a>
    </div>
    <div className="iconcontainer7">
   <a href="https://discord.com/braveboy0675_78344" target="blank"><FaDiscord/></a>
    </div>
    <div className="iconcontainer8">
  <a href="https://www.facebook.com/profile.php?id=100060165264114"target="blank"><FaFacebookSquare/></a>
    </div>
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