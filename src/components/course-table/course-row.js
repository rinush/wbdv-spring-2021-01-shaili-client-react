import React, {useState} from 'react'
import {Link} from "react-router-dom";
import '../course-style.css';

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

  return (
    <div class="row table-row">
          <div class="col-xs-6 col-md-4 col-lg-5">
          {
              !editing &&
              <Link to="/courses/editor">
                  <i class="fa fa-file"></i>
                  {title}
              </Link>
          }
          {
              editing &&
              <input
                  onChange={(event) => setNewTitle(event.target.value)}
                  value={newTitle}
                  placeholder={title}
                  className="form-control"/>
          }
          </div>
          <div class="col-lg-3 col-md-4 col-lg-3 d-none d-md-block">
              {owner}
          </div>
          <div class="col-lg-2 d-none d-lg-block">
              {lastModified}
          </div>
          <div class="col-xs-6 col-md-4 col-lg-1 close">
              <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
              {!editing && <i onClick={() => { setNewTitle('')
                                               return setEditing(true) }}
                                               className="fas fa-edit"></i> }
              {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
          </div>
     </div>
//      <tr>
//        <td>
//            {
//                !editing &&
//                <Link to="/courses/editor">
//                    {title}
//                </Link>
//            }
//            {
//                editing &&
//                <input
//                    onChange={(event) => setNewTitle(event.target.value)}
//                    value={newTitle}
//                    className="form-control"/>
//            }
//        </td>
//        <td>{owner}</td>
//        <td>{lastModified}</td>
//        <td>
//            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
//            {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
//            {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
//        </td>
//      </tr>
  )
}
export default CourseRow