import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';
import { useForm } from '@formspree/react';

function Contact() {

    const [ state, handleSubmit ] = useForm("xlevdrky")

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                setErrorMessage('');
            } 
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    if (state.succeeded) {
        return <div>Email has been sent</div>;
    }

    return (
        <div>
            <h1 className="small ease-right-expand">Let's Connect</h1>
            <p className="contact-text">Send me a message to discuss a project</p>
            <form onSubmit={handleSubmit}>
                <label className="contact-top-text">Name:</label>
                <input type="text" id="name" defaultValue={name} onBlur={handleChange}></input>

                <label className="contact-top-text">Email:</label>
                <input type="email" id="email" name="_replyto" defaultValue={email} onBlur={handleChange} ></input>
                
                <label className="contact-top-text">Message:</label>
                <input type="message" id="message" defaultValue={message} onBlur={handleChange} ></input>
                
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;