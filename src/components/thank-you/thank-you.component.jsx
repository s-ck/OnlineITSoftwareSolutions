import React from 'react';
import { Container } from 'react-bootstrap';
import '../thank-you/thank-you.styles.css';

const ThankYou = ({name}) => (
    <Container>
        <div className = "center">       
            Thanks for filling the {name}
        </div>
    </Container>
)
export default ThankYou;