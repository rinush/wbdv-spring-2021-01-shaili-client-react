import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        deleteItem,
        updateItem,
        item,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active?'active text-black':'text-white'}`} to={to}>
                        {item.title}
                    </Link>
                    <span onClick={() => setEditing(true)} className="fas fa-edit pull-right text-white"></span>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <span onClick={() => {setEditing(false); updateItem(cachedItem);}} className="pull-right fas fa-check text-white"></span>
                    <span onClick={() => {setEditing(false); deleteItem(item); }} className="pull-right fas fa-trash text-white"></span>
                </>
            }
        </>
    )
}

export default EditableItem