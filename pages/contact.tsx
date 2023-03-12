import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    
    return <>
        <h1>Contact Us</h1>

        <p>To get in touch with our customer service representatives or learn more about our company mission, send us an email at <a href="mailto:info@mealerapp.com">info@mealerapp.com</a>.</p>

        <p>You can also fill out the form below:</p>

        { submitted ?
            <p><strong>Your message was submitted!</strong></p>
        :
            <form name="contact" data-netlify="true" data-netlify-recaptcha="true" onSubmit={async (e: any) => {
                e.preventDefault();

                try {
                    await fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams(new FormData(e.target)).toString()
                    });

                    setSubmitted(true);
                } catch (err: any) {
                    alert(err.message);
                    console.error(err);
                }
            }}>
                <div>
                    <label htmlFor="name" className="me-1">Your Name: </label>
                    <input id="name" name="name" type="text" required />
                </div>

                <div className="my-2">
                    <label htmlFor="email" className="me-1">Your Email: </label>
                    <input id="email" name="email" type="email" required />
                </div>

                <div>
                    <label htmlFor="message" className="d-block">Your Message: </label>
                    <textarea className="w-100 mt-1" rows={10} name="message" required />
                </div>

                <div className="my-3" data-netlify-recaptcha="true" />

                <button className="btn btn-primary" type="submit">Send</button>
            </form>
        }
    </>;
}