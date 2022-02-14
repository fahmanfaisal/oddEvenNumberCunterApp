import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

function EmailFormSubmit() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0sfjvhf', 'template_is2cpkl', form.current, 'user_dcvvtkHWzjFwuGX7xzcMK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          alert("Email Send:");
      };

  return (
    <div className='container'>
        <h1>contact us</h1>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Message</label>
            <textarea name='message'>Message</textarea>
            <input type="submit" name="submit" className='button' value="send"></input>
        </form>
    </div>
  )
}

export default EmailFormSubmit