import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4m1q4na', 'template_xa9gjck', form.current, 'cLjJueGxNImyUkTDu')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully.")
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return(
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Full Name" name="user_name"/>
                <input type="email" placeholder="Enter E-mail" name="user_email"/>
                {/* <input type="text" placeholder="Enter Your College Name"/> */}

                <textarea placeholder="Write here..." name="message"></textarea>
                <input type="submit" value='Submit'/>
            </form>
        </div>
    )
}
export default Contact;
{/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
