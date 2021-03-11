import React from 'react';
import ThankYou from '../thank-you/thank-you.component';
import { Modal, Form, Button} from 'react-bootstrap';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import appendData_Reg from './add-record';
import '../enquiry/quick-enquiry.styles.css';

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            data:[],
            name:"",
            email:"",
            mobile:"",
            course:"",
            batch:""
        }
    }

    async readData(){
        const SPREADSHEET_ID = process.env.React_App_SPREADSHEET_ID;
        const client_email = process.env.React_App_CLIENT_EMAIL;
        const PRIVATE_KEY = process.env.React_App_PRIVATE_KEY;
        const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
        try{
          await doc.useServiceAccountAuth({
              client_email:client_email,
              private_key:PRIVATE_KEY,
          });
          await doc.loadInfo();
          const sheet = doc.sheetsByIndex[5];
          var arr = [];
          let count = 0;
          await (await sheet.getRows()).map(row => {
              arr [count] = Object.values(row);
              count++;
          })
          this.setState({data:arr});
        }catch(e){
          console.log(e);
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
            Batch:this.state.batch[0],
            date:new Date().toLocaleDateString()
        });
        document.getElementById('thank-you').style.display = "block";
    }

    componentDidMount(){
        this.readData();
        document.getElementById('thank-you').style.display = "none";
    }

    render(){
        return(
        <>
        <div id="thank-you">
            <ThankYou name="Register"/>
        </div>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Register For the Course</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                   <Form id = "reg" onSubmit = {this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type = "text" name = "name" placeholder = "First Name" onChange = {this.handleChange}/>
                        <span id="name" className = "alert-feild"></span>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" name = "email" placeholder = "Email ID" onChange = {this.handleChange}/>
                        <span id="email" className = "alert-feild"></span>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type = "number" name = "mobile" placeholder = "Mobile Number" onChange = {this.handleChange}/>
                        <span id="mobile" className = "alert-feild"></span>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Course</Form.Label>
                        <Form.Control type = "text"  name = "course" placeholder = "Course" onChange = {this.handleChange}/>
                        <span id="course" className = "alert-feild"></span>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Batch</Form.Label>
                        <Form.Control as = "select" name = "batch" onChange = {this.handleChange}>
                            {
                                this.state.data.map(row =>
                                    <option key={row[1]}>{row[3]+" "+row[5]+" "+row[6]}</option>
                                )
                            }
                            <span id="batch" className = "alert-feild"></span>
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                   </Form> 
                </Modal.Body>
        </Modal.Dialog>
        </>
        )
    }
}
export default Register;