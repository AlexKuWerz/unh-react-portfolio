import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactFormBlock() {
    const [contactForm, setContactForm] = useState({
        fields: {},
        errors: {},
    });

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        let fields = contactForm.fields;
        let errors = contactForm.errors;

        fields[inputName] = inputValue;
        errors[inputName] = '';

        if (!fields[inputName]) {
            errors[inputName] = 'This field is required';
        }

        setContactForm({
            fields,
            errors,
        });
    }

    const handleValidation = () => {
        let fields = contactForm.fields;
        let errors = {};
        let isFormValid = true;

        if (!fields['contact-name']) {
            errors['contact-name'] = 'This field is required';
            isFormValid = false;
        }

        if (!fields['contact-email']) {
            errors['contact-email'] = 'This field is required';
            isFormValid = false;
        } else if (!validateEmail(fields['contact-email'])) {
            errors['contact-email'] = 'Email is not valid';
            isFormValid = false;
        }

        if (!fields['contact-message']) {
            errors['contact-message'] = 'This field is required';
            isFormValid = false;
        }

        setContactForm({
            fields,
            errors,
        });

        return isFormValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (handleValidation()) {
            alert(`Your message was sent.`);

            setContactForm({
                fields: {},
                errors: {},
            });
        }
    }

    return (
        <section className="content-section branch-decor branch-decor-rounded bullet-point-decor">
            <h2 className="title">Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label
                        className="form-label"
                        htmlFor="contact-name">Name</label>
                    <input
                        className={contactForm.errors['contact-name'] ? "form-input not-valid-input" : "form-input"}
                        type="text"
                        name="contact-name"
                        id="contact-name"
                        value={contactForm.fields['contact-name'] ? contactForm.fields['contact-name'] : '' }
                        onChange={handleChange}
                        onFocus={handleChange} />
                    {contactForm.errors['contact-name'] ? <p className="form-field-message">{contactForm.errors['contact-name']}</p> : null}
                </div>
                <div className="form-field">
                    <label
                        className="form-label"
                        htmlFor="contact-email">Email</label>
                    <input
                        className={contactForm.errors['contact-email'] ? "form-input not-valid-input" : "form-input"}
                        type="text"
                        name="contact-email"
                        id="contact-email"
                        value={contactForm.fields['contact-email'] ? contactForm.fields['contact-email'] : ''}
                        onChange={handleChange}
                        onFocus={handleChange} />
                    {contactForm.errors['contact-email'] ? <p className="form-field-message">{contactForm.errors['contact-email']}</p> : null}
                </div>
                <div className="form-field">
                    <label
                        className="form-label"
                        htmlFor="contact-message">Message</label>
                    <textarea
                        className={contactForm.errors['contact-message'] ? "form-input not-valid-input" : "form-input"}
                        name="contact-message"
                        id="contact-message"
                        value={contactForm.fields['contact-message'] ? contactForm.fields['contact-message'] : ''}
                        onChange={handleChange}
                        onFocus={handleChange}></textarea>
                    {contactForm.errors['contact-message'] ? <p className="form-field-message">{contactForm.errors['contact-message']}</p> : null}
                </div>
                <button className="btn" type="submit">Send</button>
            </form>
        </section>
    );
}

export default ContactFormBlock;
