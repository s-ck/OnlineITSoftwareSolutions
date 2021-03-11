import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import appendData_Inquiry from '../util/spreadsheet';
import '../enquiry/quick-enquiry.styles.css';
import ThankYou from '../thank-you/thank-you.component';

class QuickEnquiry extends React.Component{
    constructor(){
        super()
        this.state = {
              name:"",
              email:"",
              mobile:"",
              course:""
        }
    }    

    handleChange = (e) => {
        let str_data = e.target.value;
        if(str_data.length === 0){
            document.getElementById(e.target.name).innerHTML = "This filed can not be blank"
        }else if(str_data.length !== 0){
            document.getElementById(e.target.name).innerHTML = ""
            this.setState({[e.target.name]:[e.target.value]})
        }else if(e.target.name === "mobile" && str_data.length !== 10){
            document.getElementById(e.target.name).innerHTML = "Mobile Number is Incorrect"
        }else if(e.target.name === "mobile" && str_data.length === 10){
            document.getElementById(e.target.name).innerHTML = ""
            this.setState({[e.target.name]:[e.target.value]})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('inquiry').reset();
        appendData_Inquiry(
            {
                Name:this.state.name[0],
                Email:this.state.email[0],
                Mobile_Number:this.state.mobile[0],
                Course:this.state.course[0],
                date:new Date().toLocaleDateString()
            });
            document.getElementById('thank-you').style.display = "block";
    }

    componentDidMount(){
        document.getElementById('thank-you').style.display = "none";
    }

    render(){
        return(
        <>
        <div id="thank-you">
            <ThankYou name="Enquiry"/>
        </div>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Fill the details below</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <Form id = "inquiry" onSubmit = {this.handleSubmit}>
                       <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type = "text" name = "name" placeholder = "First Name" onChange = {this.handleChange}/>
                            <span id="name" className="alert"></span>
                       </Form.Group>
                       <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type = "email" name = "email" placeholder = "Email ID" onChange = {this.handleChange}/>
                            <span id="email" className="alert"></span>
                       </Form.Group>
                       <Form.Group>
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type = "number" name = "mobile" placeholder = "Mobile Number" onChange = {this.handleChange}/>
                            <span id="mobile" className="alert"></span>
                       </Form.Group>
                       <Form.Group>
                            <Form.Label>Course</Form.Label>
                            <Form.Control type = "text"  name = "course" placeholder = "Course" onChange = {this.handleChange}/>
                            <span id="course" className="alert"></span>
                       </Form.Group>
                        <Button type="submit">Submit</Button>
                   </Form> 
                </Modal.Body>
            </Modal.Dialog>
        </>
        )
    }
}
export default QuickEnquiry;