import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GoogleSpreadsheet } from 'google-spreadsheet';

import '../syllabus/syllabus.styles.css';

class Syllabus extends React.Component{
    constructor(){
        super()
        this.state = {
            data:[],
            course:""
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
          const sheet = doc.sheetsByIndex[3];
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

    componentDidMount(){
        this.readData()
        this.setState({course:this.props.location.pathname})
    }
    render(){
        if(this.state.course === "syllabus/Java"){
            return(
                <Container>
                <h3>{this.state.course.split("/")[2]}</h3>
                <Row>
                    <Col>
                        {
                            this.state.data.filter(row => row[3] <= 30).filter(row => row[4] === this.state.course.split("/")[2]).map(row =>
                                <p key = {row[1]}>{row[5]}</p>
                            )
                        }
                    </Col>
                    <Col>
                        {
                            this.state.data.filter(row => row[3] >= 31 && row[3] <= 60).filter(row => row[4] === this.state.course.split("/")[2]).map(row =>
                                <p key = {row[1]}>{row[5]}</p>
                            )
                        }
                    </Col>
                    <Col>
                        {
                            this.state.data.filter(row => row[3] >= 61).filter(row => row[4] === this.state.course.split("/")[2]).map(row =>
                                <p key = {row[1]}>{row[5]}</p>
                            )
                        }
                    </Col>
                </Row>    
                </Container>
            )

        }else{
            return(
                <Container>
                <h3>{this.state.course.split("/")[2]}</h3>
                <Row>
                    <Col>
                        {
                            this.state.data.filter(row => row[3] <= 20).filter(row => row[4] === this.state.course.split("/")[2]).map(row =>
                                <p key = {row[1]}>{row[5]}</p>
                            )
                        }
                    </Col>
                    <Col>
                        {
                            this.state.data.filter(row => row[3] >= 21 && row[3] <= 40).filter(row => row[4] === this.state.course.split("/")[2]).map(row =>
                                <p key = {row[1]}>{row[5]}</p>
                            )
                        }
                    </Col>
                    <Col>
                        {
                            this.state.data.filter(row => row[3] >= 41).filter(row => row[4] === this.state.course.split("/")[2]).map(row =>
                                <p key = {row[1]}>{row[5]}</p>
                            )
                        }
                    </Col>
                </Row>
                </Container>
            )
        }
    }
}
export default Syllabus;