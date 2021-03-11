import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import ThankYou from '../thank-you/thank-you.component';
import './testimonies.styles.css';
import appendData_Testimonies from './add-testimonies';

class TestimonieForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"",
            rating:"",
            testimonie:""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:[e.target.value]})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        appendData_Testimonies({
            Name:this.state.name[0],
            Rating:this.state.rating[0],
            Testimonies:this.state.testimonie[0],
            Date:new Date().toLocaleDateString()
        })
        document.getElementById('form').reset();
        document.getElementById('thank-you').style.display = "block";
    }

    componentDidMount(){
        document.getElementById('thank-you').style.display = "none";   
    }

    render(){
        return(
            <>
        <div id="thank-you">
            <ThankYou name="Testimonies"/>
        </div>    
      <Container>
        <h1>Add Testimonies</h1>
        <Form id = "form" onSubmit = {this.handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type = "text" name = "name" placeholder = "First Name" onChange = {this.handleChange}/>           
            </Form.Group>
            <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control type = "number" name = "rating" placeholder = "Rating out of 5" onChange = {this.handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Testimonie</Form.Label>
                <Form.Control as = "textarea" name = "testimonie" placeholder = "Please enter Review" onChange = {this.handleChange} rows = {5}/>
            </Form.Group>
            <Form.Group>
                <Button className = "btn" type="submit">Submit</Button>
            </Form.Group>
        </Form>
     </Container>  
    </>
    )
    }
}
export default TestimonieForm;