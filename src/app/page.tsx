import Image from "next/image"
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import Section2 from "./section2/page";
import Skills from "./Skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "./Footer/Footer";
export default function Home(){
  return(
    <div className="Parent">
    <div className="content">
      <div className="image">
      <Image src={"/my.png"} alt="Ahmed" width={470} height={100}/>
    </div>
    <div className="socialbutton">
<a href="https://www.facebook.com/profile.php?id=100060165264114" target="blank"><CiFacebook/></a>
    </div>
  <div className="socialbutton2">
<a href="https://www.linkedin.com/in/ahmed-memon-5550642b5/" target="blank"><TiSocialLinkedinCircular/></a>
    </div>
    <div className="socialbutton3">
<a href="https://github.com/AhmedMemon1234" target="blank"><FaGithub/></a>
    </div>
    <div className="h1first">
      <h1>Hi, I'm <span>AhmedMemon,</span><br />Full Stack Web Developer,<br /><span>Designing The Future Of Web Dev.</span></h1>
    </div>
    <div className="buttons">
  <a href="/Ahmed_Memon_CV.pdf" download="Ahmed_Memon_CV"><button className="button1">Download CV</button></a>    
    </div>
    <div className="check">
    <h1>Check Out My</h1>
    </div>
    </div>
    <Section2/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}