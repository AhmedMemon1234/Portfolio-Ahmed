export default function Contact(){
    return(
        <div className="Parentcontact" id="contact">
            <div className="Childcontact">
<div className="getintouch">
<h1>Get In Touch!</h1>
</div>
<div className="name">
    <input type="text" placeholder="Name"/>
</div>

<div className="email">
    <input type="email" placeholder="Email"/>
</div>

<div className="message">
    <input type="text" placeholder="Message"/>
</div>
<div className="Sendmessage">
<button><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCDBqmVlxdbMgDfhRtmHKrgcJqwSZNnVJrlrzBGmsRHCzCbTQsMXbjTBHXpDWSDGplLcCg">Send Message</a></button>
</div>

            </div>
        </div>
    )

}