import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../courses/course-content.styles.css';

const CourseContent = (image) => (
    <Card  key={image.image.id} style={{ width: '18rem' }}>
        <Link to = {`/syllabus/${image.image.title}`}>
            <Card.Img variant="top" src={image.image.name}/>
        </Link>
        <Card.Body>
            <span className="title">{image.image.title}</span>
        </Card.Body>
    </Card>
)
export default CourseContent;