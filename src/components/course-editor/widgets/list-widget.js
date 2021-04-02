import React from 'react'

const ListWidget = ({widget, edit, editWidget, setWidget}) => {
    return (
        <div>
            {
                !edit &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
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
                    <input onChange={(e) => setWidget({...editWidget, ordered: e.target.checked})}  checked={editWidget.ordered} type="checkbox"/> Ordered
                    <br/>
                    List Items
                    <textarea rows={10}  onChange={(e) => setWidget({...editWidget, text: e.target.value})} value={editWidget.text} className="form-control">

                    </textarea>
                </div>
            }
        </div>
    )
}

export default ListWidget