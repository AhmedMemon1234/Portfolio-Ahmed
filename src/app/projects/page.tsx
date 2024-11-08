import Image from "next/image";

export default function projects(){
    return(
        <div className="ProjectsParent" id="projects">
<div className="ProjectsChild">
<div className="Projectshead">
<h1>My Projects</h1>
</div>
<div className="resumeproject">
<Image src={"/resume.png"} alt="Ahmed" width={300} height={100}/>
</div>
<div className="foodweb">
<Image src={"/restaurent.png"} alt="Ahmed" width={300} height={100}/>
</div>
<div className="iphonewebsite">
 <Image src={"/iphone.png"} alt="Ahmed" width={300} height={100}/>
</div>
<div className="ecome">
<Image src={"/ecome.jpg"} alt="Ahmed" width={300} height={100}/> 
</div>
<div className="food">
<Image src={"/food.jpg"} alt="Ahmed" width={300} height={100}/>
</div>
<div className="chocoweb">
    <Image src={"/choco.png"} alt="Ahmed" width={300} height={100}/>
</div>
<div className="buttons">
 <button className="resumebutton"><a href="https://github.com/AhmedMemon1234/iphoneassignmentbyahmedmemon" target="blank">Github</a></button>
<button className="resumebutton2"><a href="https://iphoneassignmentbyahmedmemon.vercel.app/" target="blank">Vercel Live</a></button>
</div>
<div className="buttons2">
<button className="resumebutton3"><a href="https://github.com/AhmedMemon1234/Milestone4ByAhmed">Github</a></button>
<button className="resumebutton4"><a href="https://assignment4-5-by-ahmed-owbr.vercel.app/">Vercel Live</a></button>
</div>

<div className="buttons3">
<button className="resumebutton5"><a href="https://github.com/AhmedMemon1234/Milestone4ByAhmed">Github</a></button>
<button className="resumebutton6"><a href="https://milestone4-by-ahmed.vercel.app/">Vercel Live</a></button>
</div>
</div>
        </div>
    )
}