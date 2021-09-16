import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submit', formState);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" onChange={handleChange} name="name" defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" onChange={handleChange} name="email" defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" onChange={handleChange} rows="5" defaultValue={message} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;