import React from 'react'
import {Link} from 'react-router-dom'
import './course-style.css';

const CourseTopElement = () =>
     <div class="row text-center second d-none d-lg-flex">
             <div class="col-4">
                 Title
             </div>
             <div class="col-3">
                 Owned by
                 <i class="fa fa-sort-up"></i>
             </div>
             <div class="col-2">
                 Last modified
             </div>
             <div class="col-3">
                 <i class="fa fa-th"></i>
                 <i class="fa fa-sort"></i>
             </div>
     </div>
            
    
export default CourseTopElement

 