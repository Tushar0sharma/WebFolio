import React, {  useState } from 'react'
import globe from "../../assets/globe1.gif"
import './contact.css'
import Swal from 'sweetalert2'


function Contact() {
  const [submit,setsubmit]=useState(false)
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // formData.append("access_key", "7e5edd80-0d59-4d76-b6bc-4b6b3a9fd821");

    // const object = Object.fromEntries(formData);
    // const json = JSON.stringify(object);

    // const res = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    //   },
    //   body: json
    // }).then((res) => res.json());
    
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();

    if (!name || !email || !subject || !message) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill out all fields before submitting.',
        icon: 'error',
      });
      return; // Stop submission
    }
    setsubmit(true)

    try{
      const res=await fetch("https://web-folio-six.vercel.app/contact",{

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({name,email,subject,message}),
      })
      const result = await res.json();  // Make sure you use 'await'
      if (result.success) {
        Swal.fire({
          title: "Success",
          text: "Message Sent Successfully",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Error",
          text: result.error || "Something went wrong.",
          icon: "error",
        });
      }
      
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: "Something went wrong.",
      icon: "error",
    });
  } finally {
    setsubmit(false);
  }
  };
  return (
    <section className="container section contact" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk About Everything</h3>
          <p className="contact_detail">Don't like forms? Send Me an Email</p>
          <img src={globe} alt='ssk' className='gif' />
        </div>

        <form onSubmit={onSubmit} className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input name='name' type="text" className="contact_form-input" placeholder='Enter Your Name' />
            </div>
            <div className="contact_form-div">
              <input name='email' type="email" className="contact_form-input" placeholder='Enter Your email' />
            </div>
            <div className="contact_form-div">
              <input name='subject' type="text" className="contact_form-input" placeholder='Enter Your Subject' />
            </div>
            <div className="contact_form-div size">
              <textarea name='message' placeholder='Write Your Message'  className='contact_form-input' id="" cols="30" rows="10"></textarea>
            </div>
          </div>
            <button type='submit' className='btn2'>{submit?"Sending...":"Send Message"}</button>
        </form>
      </div>

    </section>
  )
}

export default Contact