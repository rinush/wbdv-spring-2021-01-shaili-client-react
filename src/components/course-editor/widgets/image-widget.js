import React from 'react'

const ImageWidget = ({widget, edit, editWidget, setWidget}) => {
    return (
        <div>
        <h1>Image Widget</h1>
            {
                !edit &&
                <div>
                    <img width={widget.width} height={widget.height} src={widget.src}/>
                </div>
            }
            {
                edit &&
                <div>
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