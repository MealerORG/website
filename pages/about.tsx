import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Section from "../components/section";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Card = {
    image: string;
    name: string;
    description: string;
    link: string;
};

export default function About() {
    const team: Card[] = [
        {
            image: "",
            name: "Nelson Gou",
            description: "Nelson helps to develop Mealer's website and app while working on the business plan.",
            link: ""
        },
        {
            image: "",
            name: "Alex Jiang",
            description: "Alex works to develop, build, and test Mealer's website and app.",
            link: ""
        },
        {
            image: "",
            name: "Sarah Yan",
            description: "Sarah works on the marketing plan at Mealer.",
            link: ""
        },
    ];

    const partners: Card[] = [];

    return <Section background="lightBlue">
        <div>
            <h1>About Us</h1>
            <p>
                We're Mealer, a company dedicated to <strong>solving global hunger issues</strong> by allowing consumers to shop smartly and save money.
                Our meal planner and grocery list manager app allows users to plan their meals (which reduces stress) and know exactly what and how much to buy (stops consumer overbuying and saves money).
            </p>
            <p>To learn more about our app, visit the <Link href="/">product page</Link>.</p>

            <h2>Our Mission</h2>
            <p>
                Our mission is to help people manage their meals and groceries better, helping consumers save money and time and doing our part in solving the food shortage crisis happening around the world.
                To learn more about the company, join our team, or receive answers to any questions, please <Link href="/contact">contact us</Link>!
            </p>
        </div>

        <h2>Our Team</h2>

        <Row>
            {team.map((member) => (
                <Col sm="6" md="4" className="p-1">
                    <Card className="h-100">
                        <Card.Img variant="top" src={member.image} />
                        <Card.Body>
                            <Card.Title>{member.name}</Card.Title>
                            <Card.Text>{member.description}</Card.Text>
                            {member.link.length > 0 && <Button href={member.link} variant="primary">Learn More</Button>}
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>

        <h2 className="mt-3">Our Partners</h2>
        <Row>
            {partners.length > 0 ?
                partners.map((partner) => (
                    <Col sm="6" md="4" className="p-1">
                        <Card className="h-100">
                            <Card.Img variant="top" src={partner.image} />
                            <Card.Body>
                                <Card.Title>{partner.name}</Card.Title>
                                <Card.Text>{partner.description}</Card.Text>
                                {partner.link.length > 0 && <Button href={partner.link} variant="primary">Learn More</Button>}
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            :
                <p><em>Coming soon!</em></p>
            }
        </Row>
    </Section>;
}