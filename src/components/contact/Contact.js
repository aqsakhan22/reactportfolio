import React,{useState} from 'react'
import './contact.css'
import imgsvg from '../../images/shake.svg'
const Contact=()=> {
    const [message,setmessage]=useState(false)
    const handle=(e)=>{
        e.prevenDefault();
        console.log("hello")
setmessage(true)
    }
    return (
        <div className="contact" id="contact">

            <div className="leftcontact">
<img src={imgsvg}/>
            </div>
            <div className="rightcontact">
                <h2>Contact</h2>
                <form onSubmit={handle}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="message"></textarea>
                    <button type="submit">send</button>
                    {message ?  <span className="contactspan">we will reply soon</span>: ""}
            
                </form>
            </div>
           
        </div>
    )
}
export default Contact;
