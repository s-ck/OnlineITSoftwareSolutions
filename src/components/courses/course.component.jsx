import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import CourseContent from './course-conent.component';

import '../courses/courses.styles.css';
import java from './asset/java_1.png';
import selenium from './asset/selenium.png';
import appium from './asset/Appium.png';
import cucumber from './asset/cucumber.png';
import manual from './asset/ManualTesting.png';
import oracle from './asset/oracle.png';
import python from './asset/python.jpg';
import webservices from './asset/web_services.png';

class Course extends React.Component{
    constructor(){
        super()
        this.state = {
            images:[{id:1,name:java,title:'Java'},
                {id:2,name:selenium,title:'Selenium'},
                {id:3,name:appium,title:'Appium'},
                {id:4,name:manual,title:'Manual'},
                {id:5,name:oracle,title:'Oracle'},
                {id:6,name:python,title:'Python'},
                {id:7,name:webservices,title:'WebService'},
                {id:8,name:cucumber,title:'Cucumber'}]
        }
    }

    render(){
        return(
            <div className="container">
                <h1>Courses</h1>
                <Container>
                    <Row className = "row">
                    {    
                        this.state.images.filter(img => img.id <= 3).map(img => 
                            (
                                <Col key = {img.id}>
                                    <CourseContent image = {img}/> 
                                </Col>
                            )
                        )
                    }
                    </Row>
                    <Row className = "row">
                    {    
                        this.state.images.filter(img => img.id >= 4 && img.id <= 6).map(img => 
                            (
                                <Col key = {img.id}>
                                    <CourseContent image = {img}/> 
                                </Col>
                            )
                        )
                    }  
                    </Row>
                    <Row className = "row">
                    {    
                        this.state.images.filter(img => img.id >= 6 && img.id <= 8).map(img => 
                            (
                                <Col key = {img.id}>
                                    <CourseContent image = {img}/> 
                                </Col>
                            )
                        )
                    }  
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Course;