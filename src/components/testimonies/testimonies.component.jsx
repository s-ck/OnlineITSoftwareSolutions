import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import { GoogleSpreadsheet } from 'google-spreadsheet';

import '../testimonies/testimonies.styles.css';
import user from '../testimonies/user.jpg';
import Ratings from '../ratings/ratings.component';

class Testimonies extends React.Component{
    constructor(){
        super()
        this.state = {
          data:[],
          show:false
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
        const sheet = doc.sheetsByIndex[2];
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

    btnClicked = () => {
      this.setState({show:true})
    }

    handleClose = () => {
      this.setState({show:false})
    }

    componentDidMount(){
      this.readData();
    }

    render(){
        return(
            <>
              <Container>
                <span>Testimonies</span>
                {
                  this.state.data.map(row =>
                    <Row key = {row[1]} className = "rows">
                      <Col>
                        <Image className = "img" src={user}/>
                        <span className = "name" >{row[3]}</span>
                          {
                            [...Array(parseInt(row[5]))].map((start,i) =>{
                              return <Ratings/>
                            })
                          }
                        <Col className = "col">
                          <p>{row[4]}</p>
                        </Col>
                      </Col>
                    </Row>
                  )
                }
              </Container>  
            </>
        )
    }
}
export default Testimonies;