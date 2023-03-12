import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    async function submitForm(e: any) {
        e.preventDefault();

        await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(new FormData(e.target) as any).toString()
        });

        setSubmitted(true);
    }

    return <>
        <h1>Contact Us</h1>

        <p>To get in touch with our customer service representatives or learn more about our company mission, send us an email at <a href="mailto:info@mealerapp.com">info@mealerapp.com</a>.</p>

        <p>You can also fill out the form below:</p>

        { submitted ?
            <p><strong>Your message was submitted!</strong></p>
        :
            <form name="contact" method="POST" action="/" onSubmit={submitForm} data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />

                <div hidden>
                    <label htmlFor="bot-field">Don't fill this out if you're human: </label>
                    <input id="bot-field" name="bot-field" type="text" />
                </div>

                <div>
                    <label htmlFor="name" className="me-1">Name: </label>
                    <input id="name" name="name" type="text" required />
                </div>

                <div className="my-2">
                    <label htmlFor="email" className="me-1">Email: </label>
                    <input id="email" name="email" type="email" required />
                </div>

                <div>
                    <label htmlFor="message" className="d-block">Message: </label>
                    <textarea className="w-100 mt-1" rows={10} name="message" required />
                </div>

                <button className="btn btn-primary" type="submit">Send</button>
            </form>
        }
    </>;
}