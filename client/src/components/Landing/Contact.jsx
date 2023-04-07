import React from "react";

function Contact(){
    return(
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form >
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Enter E-mail"/>
                <input type="text" placeholder="Enter Your College Name"/>

                <textarea placeholder="Write here..."></textarea>
                <input type="submit" value='Submit'/>
            </form>
        </div>
    )
}
export default Contact;