import React, {useState} from 'react'
import {Link} from "react-router-dom";
import '../course-style.css';

const CourseCard = ({course,
                     deleteCourse,
                     updateCourse,
                     key,
                     title,
                     owner,
                     lastModified}) => {
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
  return(<div className="col-md-4 mt-3 col-xs-12 col-sm-6 col-lg-3 card-container">
    <div className="card">
      <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
          <img src={``}/>
        {
        !editing &&
        <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
            {course.title}
        </Link>
        }
        {
          editing &&
          <input
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            placeholder = {title}
            className="form-control"/>
        }
        <i className="fas fa-trash float-right" onClick={() => deleteCourse(course)}></i>
        {!editing && <i onClick={() => { setNewTitle('')
                                         return setEditing(true) }} className="fas fa-edit float-right mr-3"></i>}
        {editing && <i onClick={() => saveTitle()} className="fas fa-check float-right mr-3"></i>}

        <Link to={`/courses/${course._id}/quizzes`}>
            Quizzes
        </Link>
      </div>
    </div>
  </div>)
}

export default CourseCard