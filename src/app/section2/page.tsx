import Image from "next/image";

export default function Section2(){
    return(
        <div className="ParentSection2" id="About">
<div className="ChildSection2">
<div className="imageim">
<Image src={"/me.png"} alt="Ahmed" width={500} height={100}/>
</div>
<div className="fullstack">
<h1>Full Stack <span>Developer</span></h1>
</div>
<div className="paragraphsection2">
<p>Ahmed Memon is a passionate Full Stack Developer skilled in HTML, CSS, JavaScript, and TypeScript. He specializes in building dynamic, responsive web applications using Next.js for the front-end and Tailwind CSS for modern, scalable styling. Having honed his skills through practical training with the Governor IT Initiative, Ahmed has gained valuable experience in developing real-world solutions that prioritize user experience and performance. His strong foundation in both front-end and back-end development enables him to tackle the full development lifecycle, from designing interactive user interfaces to implementing complex features. Ahmed continuously seeks to improve his skills, staying up-to-date with industry trends and best practices to deliver high-quality solutions let me know if you want any website just tap on hire written on header and mail me.</p>
<a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDBqmVlxdbMgDfhRtmHKrgcJqwSZNnVJrlrzBGmsRHCzCbTQsMXbjTBHXpDWSDGplLcCg"><button>Mail Me</button></a>
</div>
</div>
        </div>
    )
}