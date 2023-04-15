import AppImage from "../components/appImage";
import styles from "./index.module.css";
import { Row, Col } from "react-bootstrap";
import Section from "../components/section";

export default function Home() {
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

        <Section background="lightBlue" height="500px">
            <Row className="h-100">
                <Col sm="6" className="h-100">
                    <AppImage app="planner" className="h-100 ms-auto" />
                </Col>

                <Col sm="6" className="d-flex flex-column justify-content-center">
                    <h2>Meal Planner</h2>
                    <p>Unique Calendar View</p>
                    <p>Saves Time and Frustration</p>
                    <p>Healthier Meals</p>
                </Col>
            </Row>
        </Section>

        <Section background="medBlue" height="500px">
            <Row className="h-100">
                <Col sm="6" className="d-flex flex-column justify-content-center text-end">
                    <h2>Shopping List</h2>
                    <p>Automatically Generated</p>
                    <p>Cost Savings</p>
                    <p>Grocery Delivery</p>
                </Col>

                <Col sm="6" className="h-100">
                    <AppImage app="list" className="h-100 me-auto" />
                </Col>
            </Row>
        </Section>

        <Section background="lightBlue" height="500px">
            <Row className="h-100">
                <Col sm="6" className="h-100">
                    <AppImage app="planner" className="h-100 ms-auto" />
                </Col>

                <Col sm="6" className="d-flex flex-column justify-content-center">
                    <h2>Custom Recipes</h2>
                    <p>Comfort & Freedom</p>
                    <p>Nutritional Information</p>
                    <p>Cooking Reminders</p>
                </Col>
            </Row>
        </Section>

        <Section background="medBlue">
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
