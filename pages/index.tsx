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

        <Section background="lightBlue">
           <br></br>
          <h1><center>Recent Updates!</center> </h1>
          <h3><center>Version 1.0 (M)/(D)/(Y)</center> </h3>
         <p><center>feature</center></p>
        </Section>
        

    </>;
}
