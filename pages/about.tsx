import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function About() {
    return <>
      <Container>
      <Row>
        <Col sm={6}> <h1>About Us</h1>  
        <p >We're Mealer, a company dedicated to <strong>solving global hunger issues</strong> by allowing consumers to shop smartly and save money.</p>
     <p>Our meal planner and grocery list manager app allows users to plan their meals (which reduces stress) and know exactly what and how much to buy (stops consumer overbuying and saves money). To learn more about our app, visit the <Link href="/">product page</Link>.</p>
     <br></br>
     <br></br>

     <h2>Our Mission</h2>

     <p>Our mission is to help people manage their meals and groceries better, helping consumers save money and time and doing our part in solving the food shortage crisis happening around the world.</p>

     <p>To learn more about the company, join our team, or receive answers to any questions, please <Link href="/contact">contact us</Link>!</p>
     <br></br>

     <p><h1>Watch a presentation of our app:</h1></p>
     <div className="position-relative h-0 rounded overflow-hidden" style={{ aspectRatio: "16 / 9", willChange: "transform" }}>
                    <iframe loading="lazy" className="position-absolute w-100 h-100 top-0 bottom-0 left-0 right-0 border-0 p-0 m-0" title="Mealer Presentation Video"
                        src="https://www.youtube-nocookie.com/embed/f17d1EuJXes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
        </Col>


        <Col sm={6}><h1 className="mb-0">Business Plan</h1>
            <div className="col-md-100 mt-3">
                
                <p>Take a look at our business plan:</p>

                <div className="position-relative h-0 rounded overflow-hidden mb-3" style={{ aspectRatio: "8.5 / 11", willChange: "transform" }}>
                    <iframe loading="lazy" className="position-absolute w-100 h-100 top-0 bottom-0 left-0 right-0 border-0 p-0 m-0" title="Mealer Business Plan"
                        src="https://www.canva.com/design/DAE7EJTz0to/view?embed" allow="fullscreen" allowFullScreen />
                </div>
            </div>
        </Col>
      </Row>
    </Container>      
    </>;
}