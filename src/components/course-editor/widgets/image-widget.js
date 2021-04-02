import React from 'react'

const ImageWidget = ({widget, edit, editWidget, setWidget}) => {
    return (
        <div>
            {
                !edit &&
                <div>
                    <img width={widget.width} height={widget.height} src={widget.src}/>
                </div>
            }
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
                    URL
                    <input onChange={(e) => setWidget(widget => ({...editWidget, src: e.target.value}))} value={editWidget.src} className="form-control"/>
                    width
                    <input onChange={(e) => setWidget(widget => ({...editWidget, width: e.target.value}))} value={editWidget.width} className="form-control"/>
                    height
                    <input onChange={(e) => setWidget(widget => ({...editWidget, height: e.target.value}))} value={editWidget.height} className="form-control"/>
                </div>
            }
        </div>
    )
}

export default ImageWidget