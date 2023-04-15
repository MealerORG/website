import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Section from "../components/section";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function About() {
    return <Section  background="lightBlue">
        <Row>
            <Col sm={12} >
            <div>
        <div>
    <h1><center>About Us</center></h1>
                <p><center>We're Mealer, a company dedicated to <strong>solving global hunger issues</strong> by allowing consumers to shop smartly and save money.
                Our meal planner and grocery list manager app allows users to plan their meals (which reduces stress) and know exactly what and how much to buy (stops consumer overbuying and saves money).</center></p>
                <p><center> To learn more about our app, visit the <Link href="/">product page</Link>.</center></p>
                <br></br>
                <h2><center>Our Mission</center></h2>
                <p><center>Our mission is to help people manage their meals and groceries better, helping consumers save money and time and doing our part in solving the food shortage crisis happening around the world.
                To learn more about the company, join our team, or receive answers to any questions, please <Link href="/contact">contact us</Link>!</center></p>
    </div>
        </div>
                
                
            </Col>
            </Row>
            <br></br>
        <h1><center>Our Team</center> </h1>
        
      
        
          <Row>
        <Col>
        
<div>

<Row>
      
            <Col className="col-4">
            <Card>
                <Card.Img variant="top" src={"#"} />
                <Card.Body>
                  <Card.Title>Person 1</Card.Title>
                  <Card.Text>description</Card.Text>
                  <Button variant="primary">learn more</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="col-4">
            <Card>
                <Card.Img variant="top" src={"#"} />
                <Card.Body>
                <Card.Title>Person 2</Card.Title>
                  <Card.Text>description</Card.Text>
                  <Button variant="primary">learn more</Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col className="col-4">
              <Card>
                <Card.Img variant="top" src={"#"} />
                <Card.Body>
                  <Card.Title>Person 3</Card.Title>
                  <Card.Text>description</Card.Text>
                  <Button variant="primary">learn more</Button>
                </Card.Body>
              </Card>
            </Col>
    </Row>

    
</div>
    
    </Col>
    </Row>
    <br>
    </br>
    <h1><center>Our Partners</center> </h1>
    <Row>
      
      <Col className="col-4">
      <Card>
          <Card.Img variant="top" src={"#"} />
          <Card.Body>
            <Card.Title>partner 1</Card.Title>
            <Card.Text>description</Card.Text>
            <Button variant="primary">learn more</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col className="col-4">
      <Card>
          <Card.Img variant="top" src={"#"} />
          <Card.Body>
          <Card.Title>partner 2</Card.Title>
            <Card.Text>description</Card.Text>
            <Button variant="primary">learn more</Button>
          </Card.Body>
        </Card>
      </Col>
      
      <Col className="col-4">
        <Card>
          <Card.Img variant="top" src={"#"} />
          <Card.Body>
            <Card.Title>partner 3</Card.Title>
            <Card.Text>description</Card.Text>
            <Button variant="primary">learn more</Button>
          </Card.Body>
        </Card>
      </Col>
</Row>

        
    </Section>;
}