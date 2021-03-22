import React from 'react'

const ParagraphWidget = ({
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
            onChange={(e) => setWidget({ ...editWidget, type: e.target.value})}
            value={editWidget.type}>
            <option value={"HEADING"}>Heading</option>
            <option value={"PARAGRAPH"}>Paragraph</option>
          </select>

          <textarea
            className="form-control"
            onChange={(e) => setWidget({ ...editWidget, text: e.target.value})}
            value={editWidget.text}>
          </textarea>
        </div>
      }
      {
        !edit &&
        <>
          <p>{widget.text}</p>
        </>
      }
    </>
  )
}

export default ParagraphWidget