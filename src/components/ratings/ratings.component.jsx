import React from 'react';
import * as FAIcons from "react-icons/fa"

import '../ratings/ratings.styles.css';

const Ratings = () => (
    <div className = "star">
        <FAIcons.FaStar className = "color" size = {25}/>
    </div>
)
export default Ratings;