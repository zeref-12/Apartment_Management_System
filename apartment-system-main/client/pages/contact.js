import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nbmawq2",
        "template_3o3iqzc",
        form.current,
        "obNyWsvHZ3a7kUjsF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
      <form ref={form} onSubmit={sendEmail}>
        <div className="contactmainbody">
        <div className="contactbody">Contact Us</div><br />
        <label className="contactName">Name</label><br />
        <input className="contactnameinput" type="text" name="user_name" /><br />
        <label className="contactemail" >Email</label><br />
        <input className="contactemailinput" type="email" name="user_email" /><br />
        <label className="contactmessage">Message</label><br />
        <textarea className="contactmessageinput" name="message" /><br />
        <input className="contactsubmit" onClick={() => alert("Thanks to visit our site, we will contact you soon")} type="submit" value="Submit" /><br />
        </div>
      </form>
  );
};

export default Contact;

