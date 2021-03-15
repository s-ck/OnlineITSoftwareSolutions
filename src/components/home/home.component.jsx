import React from 'react';
import { Col, Form, Row, Container, Button } from 'react-bootstrap';
import ThankYou from '../thank-you/thank-you.component';
import FooterComponent from '../footer/footer.component';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import appendData_Reg from '../register/add-record';
import '../enquiry/quick-enquiry.styles.css';
import '../home/home.styles.css';
import bgimg from './OnlineITSoftwareSolutions.png';
import joinus from './joinus.svg';
import workhard from './workhard.svg';
import success from './success.svg';

class Home extends React.Component{
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
    <div id="bg-img" style = {{backgroundImage:`URL(${bgimg})`}}>
    <Container>
        <div id = "title">
            <h3>Register for Course</h3>
        </div>
        <div id="inline-form" className = "reg-form">
        <div id="thank-you">
            <ThankYou name="Register"/>
        </div>
        <Form id = "form-reg" onSubmit = {this.handleSubmit}>
            <Row>
                <Col>
                <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type = "text" name = "name" placeholder = "First Name" onChange = {this.handleChange}/>
                        <span id="name" className = "alert-feild validation"></span>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" name = "email" placeholder = "Email ID" onChange = {this.handleChange}/>
                        <span id="email" className = "alert-feild validation"></span>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type = "number" name = "mobile" placeholder = "Mobile Number" onChange = {this.handleChange}/>
                        <span id="mobile" className = "alert-feild validation"></span>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Course</Form.Label>
                        <Form.Control type = "text"  name = "course" placeholder = "Course" onChange = {this.handleChange}/>
                        <span id="course" className = "alert-feild validation"></span>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Batch</Form.Label>
                        <Form.Control as = "select" name = "batch" onChange = {this.handleChange}>
                            {
                                this.state.data.map(row =>
                                    <option key={row[1]}>{row[3]+" "+row[5]+" "+row[6]}</option>
                                )
                            }
                            <span id="batch" className = "alert-feild validation"></span>
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Col>
            </Row>
        </Form>
        </div>
        <Row>
            <Col>
                <h1 style = {{color:"white"}}>Welcome to Online IT Software solutions</h1>
            </Col>
        </Row>
    </Container>
    </div>
    <div id = "body">
    <Container>
    <Row className = "row-center">
            <Col className = "col-center">
                <img src = {joinus}/>
                <p>Join Online IT software solutions</p>
            </Col>
            <Col className = "col-center">
                <img src = {workhard}/>
                <p>Work Hard</p>
            </Col>
            <Col className = "col-center">
                <img src = {success}/>
                <p>Success</p>
            </Col>
    </Row>
    </Container>
    </div>
    <FooterComponent/>
    </>
    )
    }
}
export default Home;