import React, {useState} from 'react'

const HeadingWidget = ({
  widget,
  edit = false,
  editWidget,
  setWidget,
}) => {

  return (
    <>
      {
        edit &&
        <div>
          <select
          className="form-control"
          onChange={(e) => setWidget({...editWidget, type: e.target.value})}
          value={editWidget.type}>
            <option value={"HEADING"}>Heading</option>
            <option value={"PARAGRAPH"}>Paragraph</option>
            <option value={"IMAGE"}>Image</option>
            <option value={"LIST"}>List</option>
          </select>
          <input
            className="form-control"
            onChange={(e) => setWidget({ ...editWidget, text: e.target.value})}
            value={editWidget.text}>
          </input>
          <select
            className="form-control"
            onChange={(e) => setWidget({ ...editWidget, size: parseInt(e.target.value)})}
            value={editWidget.size}>
            <option value={1}>Heading 1</option>
            <option value={2}>Heading 2</option>
            <option value={3}>Heading 3</option>
            <option value={4}>Heading 4</option>
            <option value={5}>Heading 5</option>
            <option value={6}>Heading 6</option>
          </select>
        </div>
      }
      {
        !edit &&
        <>
          {widget.size === 1 && <h1>{widget.text}</h1>}
          {widget.size === 2 && <h2>{widget.text}</h2>}
          {widget.size === 3 && <h3>{widget.text}</h3>}
          {widget.size === 4 && <h4>{widget.text}</h4>}
          {widget.size === 5 && <h5>{widget.text}</h5>}
          {widget.size === 6 && <h6>{widget.text}</h6>}
        </>
      }
    </>
  )
}

export default HeadingWidget