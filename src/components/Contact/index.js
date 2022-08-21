import React from "react";

function Contact() {
    // TODO: Add state
    // TODO: Set up handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1 className="small ease-right-expand">Let's Connect</h1>
            <p className="contact-text">Send me a message to discuss a project</p>
            <form action="https://formspree.io/leandrikuyk@gmail.com" method="POST">
                <label className="contact-top-text">Name:</label>
                <input type="text" id="name"></input>

                <label className="contact-top-text">Email:</label>
                <input type="email" id="email" name="_replyto"></input>

                <label className="contact-top-text">Message:</label>
                <input type="message" id="message"></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;