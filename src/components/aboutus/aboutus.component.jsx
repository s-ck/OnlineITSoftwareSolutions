import {Container, Row, Col } from 'react-bootstrap';

import '../aboutus/about.styles.css';
import FooterComponent from '../footer/footer.component';

const AboutUs = () => (
    <>
        <Container>
            <h1>About Us</h1>
            <Row>
                <Col>
                    <p>Online IT Software Solutions Institute has been Best Software Training Institute offering 100% Guaranteed JOB Placements, Cost-Effective, Quality & Real time Training courses on Software Testing (Manual & Automation tools), SQL ,WebServices and JAVA training facility in Bangalore. We have helped Freshers, Software Engineers, Working Professionals, business leaders, Corporate Companies and individuals incorporate the Knowledge in to their Minds through hands-on Real time training. The key to our students’ success comes from our small batch size classes and flexible schedules, One-to-one Tuitions giving students 100% JOB Assistance and time necessary to learn at their own Pace.</p>
                </Col>
            </Row>
            <Row>    
                <Col>
                    <p>Online IT Software Solutions Institute has expert trainers who have work experience in TOP MNC company. The trainers have real time experience and will provide a best training methodology and courseware with 100% real time project scenarious. The speciality of the institute is to provide the best quality training so to develop confidence in every individual into competent professionals to survive and grow in today's challenging and highly competitive software world</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Our Vision is to share our knowledge on Selenium,QTP and WebServices to others who are really interested to learn Automation testing concepts and their implementation in real time projects using Selenium ,QTP and SoapUI tools.Also make them feel confident to take challenges in work and to face interviews.By end of the Training Students will be expertised in different Framework.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>We provide morning batches , evening batches and weekend batches in Bangalore as per students requirement. The main objective of Online It Software Solutions Institute is to provide best quality training in Selenium,WebServices which enable bridge the gap between academia and corporate.</p>
                </Col>
            </Row>
        </Container>
        <FooterComponent/>
    </>
)
export default AboutUs;