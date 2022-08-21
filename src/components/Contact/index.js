import React from "react";

function Contact() {
    // TODO: Set up handle Submit

    return (
        <div>
            <h1 className="small ease-right-expand">Let's Connect</h1>
            <p className="contact-text">Send me a message to discuss a project</p>
            <form action="https://formspree.io/leandrikuyk@gmail.com" method="POST">
                <p className="contact-top-text">Name:</p>
                <input type="text" id="name"></input>

                <p className="contact-top-text">Email:</p>
                <input type="email" id="email" name="_replyto"></input>

                <p className="contact-top-text">Email:</p>
                <input type="message" id="message"></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;