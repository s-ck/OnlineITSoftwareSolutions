import React from 'react';
import { Container } from 'react-bootstrap';
import '../thank-you/thank-you.styles.css';

const ThankYou = ({name}) => (
    <Container>
        <div className = "alert alert-success">
            Thank you for the {name}
        </div>
    </Container>
)
export default ThankYou;