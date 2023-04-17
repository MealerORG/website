import AppImage from "../components/appImage";
import styles from "./index.module.css";
import { Row, Col, Tab, Tabs, Button } from "react-bootstrap";
import Section from "../components/section";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [tab, setTab] = useState("planner");

    return <>
        <Row className={styles.heroSection}>
            <Col sm="6" md="8" xxl="9" className="mt-3 d-flex flex-column justify-content-center">
                <div className="text-center">
                    <h1>Mealer</h1>
                    <p>Save money</p>
                    <p>Eat sustainably</p>
                    <p>Reduce waste with meal planning </p>
                </div>
            </Col>
            
            <Col sm="6" md="4" xxl="3" className="mt-3 d-flex flex-column justify-content-center">
                <AppImage app="login" />
            </Col>
        </Row>

        <Section height="700px">
            <Row className="h-100">
                <Col sm="6" className="h-100">
                    <AppImage app={tab} className="h-100 ms-auto" />
                </Col>

                <Col sm="6" className="d-flex flex-column justify-content-center">
                    <h2>Features</h2>

                    <Tabs activeKey={tab} onSelect={(key) => {setTab(key!)}} className="nav-pills border-bottom-0 mb-3">
                        <Tab eventKey="planner" title="Meal Planner">
                            <h3>Meal Planner</h3>
                            <p>Unique Calendar View</p>
                            <p>Saves Time and Frustration</p>
                            <p>Healthier Meals</p>
                        </Tab>

                        <Tab eventKey="list" title="Shopping List">
                            <h3>Shopping List</h3>
                            <p>Automatically Generated</p>
                            <p>Cost Savings</p>
                            <p>Grocery Delivery</p>
                        </Tab>

                        <Tab eventKey="recipe" title="Custom Recipes">
                            <h3>Custom Recipes</h3>
                            <p>Comfort & Freedom</p>
                            <p>Nutritional Information</p>
                            <p>Cooking Reminders</p>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Section>

        <Section background="medBlue" className="text-center p-5">
            <h2 className="mt-2">Download the app today!</h2>
            <p>Are you interested? Please click the link below to download the app.</p>
            <Link href="/download" passHref legacyBehavior><Button variant="dark" as="a">Download</Button></Link>
        </Section>

        <Section className="text-center p-5">
            <h2 className="mt-2">Contact Us!</h2>
            <p>Have any questions? Feel free to contact us or send us an email with your thoughts.</p>
            <Link href="/contact" passHref legacyBehavior><Button variant="dark" as="a">Contact Us</Button></Link>
        </Section>

        <Section background="lightBlue">
            <h2 className="mt-2 text-center">Updates!</h2>
            <div>
                <h3>Version 1.0</h3>
                <p><em>ETA: July 2023</em></p>
                <ul>
                    <li>finish basic features: meal planner, shopping list, custom recipes</li>
                    <li>todo: ads/monetization plan, nutritional information, Instacart integration, introduce free/paid plans</li>
                </ul>
            </div>
        </Section>
    </>;
}
