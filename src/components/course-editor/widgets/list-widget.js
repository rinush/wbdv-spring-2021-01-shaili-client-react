import React from 'react'

const ListWidget = ({widget, edit, editWidget, setWidget}) => {
    return (
        <div>
        <h1>List Widget</h1>
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