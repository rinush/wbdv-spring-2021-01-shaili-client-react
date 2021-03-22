import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import widgetService from '../../../services/widget-service';
import HeadingWidget from './heading-widget';
import ParagraphWidget from './paragraph-widget';


const WidgetList = (
  {
    widgets = [],
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    deleteWidget,
  }) => {

  const {topicId} = useParams();

  const [editWidget, setWidget] = useState({})

  useEffect( () => {
    findWidgetsForTopic(topicId);
  }, [topicId]);

  return (
    <div>
      <h2 className="text-white">Widgets<i className="fas fa-plus text-white ml-4"
          onClick={() => createWidget(topicId)}></i></h2>

      <ul className="list-group">
      {
        widgets.map(widget =>
          <li key={widget.id} className="list-group-item">

            <div>
            {
              editWidget.id === widget.id &&
              <>
              <i onClick={() => {deleteWidget(widget)
                                 setWidget({})}} className="fas fa-2x fa-trash float-right m-2"></i>
              <i onClick={() => {updateWidget(editWidget.id, editWidget)
                                 setWidget({})}} className="fas fa-2x fa-check float-right m-2"></i>
              </>
            }
            {
              editWidget.id !== widget.id &&
              <>
                <i onClick={() => setWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
              </>
            }
            </div>


            <div>
            {widget.type === "HEADING" &&
              <HeadingWidget
                widget={widget}
                edit={editWidget.id === widget.id}
                editWidget={editWidget}
                setWidget={setWidget}/> }
            {widget.type === "PARAGRAPH" &&
              <ParagraphWidget
                widget={widget}
                edit={editWidget.id === widget.id}
                editWidget={editWidget}
                setWidget={setWidget}/> }
            </div>
          </li>
        )
      }

      </ul>
    </div>
  )
}



const stpm = (state) => ({
  widgets: state.widgetReducer.widgets,
})

const dtpm = (dispatch) => ({

  findWidgetsForTopic: (topicId) => {
    widgetService.findWidgetsForTopic(topicId)
      .then(widgets => dispatch({
        type: "FIND_WIDGETS_FOR_TOPIC",
        widgets: widgets,
      }))
  },

  createWidget: (topicId) => {
    widgetService.createWidget(topicId,
      {
        type: "HEADING",
        size: 1,
        text: "New Widget"
      })
      .then(widget => dispatch({
        type: "CREATE_WIDGET",
        widget: widget,
      }))
  },

  deleteWidget: (widget) => {
    widgetService.deleteWidget(widget.id)
      .then(status => dispatch({
        type: "DELETE_WIDGET",
        widgetToDelete: widget,
      }))
  },

  updateWidget: (id, widget) => {
    widgetService.updateWidget(widget)
      .then(status => dispatch({
        type: "UPDATE_WIDGET",
        widgetToUpdate: widget,
      }))
  }


})

export default connect(stpm, dtpm)(WidgetList);