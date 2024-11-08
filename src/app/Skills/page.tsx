import Image from "next/image";

export default function Skills(){
    return(
        <div className="ParentSkill" id="skill">
            <div className="ChildSkill">
                <div className="SkillsH1">
            <h1>My Skills</h1>
            </div>
        <div className="htmlParent">
             <div className="htmlChild">
               <Image src={"/hy-transformed.png"} alt="Ahmed" width={300} height={100}/>
             <div className="progress-bar">
                <div className="progress">

                </div>
             </div>
             </div>
            </div>
            <div className="cssParent">
<div className="cssChild">
<Image src={"/csss-transformed.png"} alt="Ahmed" width={300} height={100}/>
<div className="progress-bar2">
<div className="progress2">

</div>
</div>
</div>

</div>
<div className="javascriptParent">
<div className="javascriptChild">
<Image src={"/js.png"} alt="Ahmed" width={300} height={100}/>
<div className="progress-bar3">
<div className="progress3">

</div>
</div>
</div>
</div>
<div className="typescriptParent">
<div className="typescriptChild">
<Image src={"/ts-transformed.png"} alt="Ahmed" width={300} height={100}/>
<div className="progress-bar4">
    <div className="progress4">

    </div>
</div>
</div>
</div>
           
<div className="nextjsParent">
<div className="nextjsChild">
<Image src={"/next-transformed.png"} alt="Ahmed" width={300} height={100}/>
<div className="progress-bar5">
<div className="progress5">

</div>
</div>
</div>
    </div>
     <div className="tailwindParent">
        <div className="tailwindChild">
<Image src={"/tailwinds-transformed.png"} alt="Ahmed" width={300} height={100}/>
        <div className="progress-bar6">
              <div className="progress6">

              </div>
        </div>
        </div>
     </div>
    
            </div>
        </div>
    )
}