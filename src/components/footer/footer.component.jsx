import React from 'react';
import * as FAIcons from "react-icons/fa";
import * as AIIcons from "react-icons/ai";
import '../footer/footer.styles.css';

class FooterComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            year : new Date().toLocaleDateString().split("/")
        }
    }

    render(){
      return(  
        <>
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
            <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">About Institute</h5>
            <p style = {{fontSize:'15px'}}>
                Online IT Software Solutions Institute has been Best Software Training Institute offering 100% Guaranteed JOB Placements, Cost-Effective, Quality & Real time Training courses on Software Testing (Manual & Automation tools), SQL ,WebServices and JAVA training facility in Bangalore. We have helped Freshers, Software Engineers, Working Professionals, business leaders, Corporate Companies and individuals incorporate the Knowledge in to their Minds through hands-on Real time training. The key to our students’ success comes from our small batch size classes and flexible schedules, One-to-one Tuitions giving students 100% JOB Assistance and time necessary to learn at their own Pace.
            </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <h5 className="text-uppercase">Adderss</h5>
            <p style = {{fontSize:'15px'}}>
                No #85, 1st main, 2nd stage,
                Thanisandra main road, Ashwath nagar
                Banglore-560077
            </p>
            <p style = {{fontSize:'15px'}}>
                <AIIcons.AiOutlineMail/>onlineItsoftwaresolutions@gmail.com
            </p>
            <p style = {{fontSize:'15px'}}>
                <FAIcons.FaPhoneAlt/> +91-6366975664/9742917727
            </p>
            </div>
            </div>
            </div>
            <div className="text-center p-3" style={{backgroundColor:'gray'}}>
                `© {this.state.year[2]} Copyright`
                <a className="text-dark" href="">Online IT Software Solutions</a>
            </div>
        </footer>
        </>
        )
    }
}
export default FooterComponent;