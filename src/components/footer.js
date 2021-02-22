import React from 'react';
import './course-style.css'

const Footer=({addCourse})=>
    <div class="plus" onClick = {addCourse}>
            <i class="fa fa-plus fa-2x"></i>
    </div>

export default Footer;