import Image from "next/image";
import { RiMenuUnfold2Line } from "react-icons/ri";
import Link from "next/link";

export default function Header() {
  return (
    <div className="HeaderParent">
      <Image src="/am.jpg" alt="Ahmed" width={50} height={100} className="am" />
      <h1 className="logo">
        Ahmed<span>Memon</span>
      </h1>

      <input type="checkbox" id="click" className="menu-toggle" />
      
      <label htmlFor="click" className="hamburger">
        <RiMenuUnfold2Line />
      </label>

      <ul className="HeaderChild">
        <Link href="/"><li className="Home">Home</li></Link>
        <a href="#About"><li className="About">About</li></a>
        <a href="#skill"><li className="Skills">Skills</li></a>
        <a href="#projects"><li className="Projects">Projects</li></a>
        <a href="#contact"><li className="Contact">Contact</li></a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDBqmVlxdbMgDfhRtmHKrgcJqwSZNnVJrlrzBGmsRHCzCbTQsMXbjTBHXpDWSDGplLcCg">
          <button>Hire Me</button>
        </a>
      </ul>
    </div>
  );
}
