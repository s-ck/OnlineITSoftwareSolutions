import React from 'react';
import ThankYou from '../thank-you/thank-you.component';
import { Modal, Form, Button} from 'react-bootstrap';
import appendData_Reg from './add-record';
import '../enquiry/quick-enquiry.styles.css';

class Register extends React.Component{
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
        appendData_Reg({
            Name:this.state.name[0],
            Email:this.state.email[0],
            Mobile_Number:this.state.mobile[0],
            Course:this.state.course[0],
            date:new Date().toLocaleDateString()
        });
        document.getElementById('show').style.display = "block";
        document.getElementById('formdiv').style.display = "none";
    }

    componentDidMount(){
        document.getElementById('show').style.display = "none";
    }

    render(){
        return(
            <>
        <div id="formdiv">
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Register For the Course</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                   <Form id = "reg" onSubmit = {this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type = "text" name = "name" placeholder = "First Name" onChange = {this.handleChange}/>
                        <span id="name" className = "alert"></span>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" name = "email" placeholder = "Email ID" onChange = {this.handleChange}/>
                        <span id="email" className = "alert"></span>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type = "number" name = "mobile" placeholder = "Mobile Number" onChange = {this.handleChange}/>
                        <span id="mobile" className = "alert"></span>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Course</Form.Label>
                        <Form.Control type = "text"  name = "course" placeholder = "Course" onChange = {this.handleChange}/>
                        <span id="course" className = "alert"></span>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                   </Form> 
                </Modal.Body>
        </Modal.Dialog>
        </div>
        <div id = "show"><ThankYou name = "Registeration"/></div>
        </>
        )
    }
}
export default Register;