import { useState } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import Section from "../components/section";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    async function submitForm(e: any) {
        e.preventDefault();

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(new FormData(e.target) as any).toString()
            });
    
            setSubmitted(true);
        } catch (err: any) {
            alert(err.message);
            console.log(err);
        }
    }

    return <Section>
        <h1>Contact Us</h1>

        <p>To get in touch with our customer service representatives or learn more about our company mission, send us an email at <a href="mailto:info@mealerapp.com">info@mealerapp.com</a>.</p>

        <p>You can also fill out the form below:</p>

        { submitted ?
            <p><strong>Your message was submitted!</strong></p>
        :
            <Form name="contact" method="POST" action="/" onSubmit={submitForm} data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />

                <div hidden>
                    <label htmlFor="bot-field">Don't fill this out if you're human: </label>
                    <input id="bot-field" name="bot-field" type="text" />
                </div>

                <FloatingLabel controlId="name" label="Name">
                    <Form.Control type="text" name="name" placeholder="Name" required />
                </FloatingLabel>

                <FloatingLabel controlId="email" label="Email" className="my-2">
                    <Form.Control type="email" name="email" placeholder="Email" required />
                </FloatingLabel>

                <FloatingLabel controlId="message" label="Message" className="mt-1 mb-3">
                    <Form.Control as="textarea" name="message" placeholder="Message" required style={{ height: "200px" }} />
                </FloatingLabel>

                <Button variant="primary" type="submit">Send</Button>
            </Form>
        }
    </Section>;
}