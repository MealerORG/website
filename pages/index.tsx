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
                    <p>Plan your meals</p>
                    <p>Save money</p>
                    <p>Help the environment</p>
                </div>
            </Col>
            
            <Col sm="6" md="4" xxl="3" className="mt-3 d-flex flex-column justify-content-center">
                <AppImage app="login" />
            </Col>
        </Row>

        <Section background="lightBlue">
            some stuff
        </Section>

        <Section background="medBlue">
            other stuff
        </Section>
    </>;
}
