import React from 'react';
import './course-style.css';
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";

class AddCourseElement extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
             <div class="row first">
                     <div class="col-1">
                         <i class="fa fa-bars fa-2x"></i>
                     </div>
                     <div class="col-2 d-none d-xl-block">
                         <h4>Course Manager</h4>
                     </div>
                     <div class="col-8">
                         <input class="form-control"
                                type="text"
                                onChange={this.props.updateForm}
                                value = {this.props.coursetitle}
                                placeholder="New Course Title" />
                     </div>
                     <div class="col-1 add" onClick={this.props.addCourse}>
                         <i class="fa fa-plus fa-2x plus"></i>
                     </div>
             </div>
        )
    }
}


export default AddCourseElement;