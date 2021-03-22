const initialState = {
  widgets: []
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_WIDGET":
      const newState = {
        widgets: [
          ...state.widgets,
          action.widget
        ]
      }
      return newState
    case "DELETE_WIDGET":
      const newState1 = {
        widgets: state.widgets.filter(widget => {
          if (widget.id !== action.widgetToDelete.id) {
            return true
          } else {
            return false
          }
        })
      }
      return newState1
    case "UPDATE_WIDGET":
      return {
        widgets: state.widgets.map(widget => {
          if (widget.id === action.widgetToUpdate.id) {
            return action.widgetToUpdate
          } else {
            return widget
          }
        })
      }
    case "FIND_WIDGETS_FOR_TOPIC":
      return {
        ...state,
        widgets: action.widgets
      }
    default:
      return state
  }
}

export default widgetReducer