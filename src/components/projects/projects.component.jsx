import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { GoogleSpreadsheet } from 'google-spreadsheet';

import '../projects/projects.styles.css';

class Projects extends React.Component{
    constructor(){
        super()
        this.state = {
            data:[]
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
          const sheet = doc.sheetsByIndex[4];
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
        this.readData();
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h3 className = "title">Software Projects for Final Year</h3>
                    </Col>
                </Row>
                {
                    this.state.data.map(row =>
                        <Col key = {row[3]}>
                            <p>{row[4]}</p>
                        </Col>
                    )
                }
            </Container>
        )
    }


}
export default Projects;