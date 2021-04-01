const URL = 'http://localhost:8080/api'

export const findWidgetsForTopic = (topicId) =>
  fetch(`${URL}/topics/${topicId}/widgets`)
    .then(response => response.json());

export const deleteWidget = (widgetId) =>
  fetch(`${URL}/widgets/${widgetId}`, {
    method: "DELETE",
  })
    .then( response => response.json());

export const createWidget = (topicId, widget) =>
  fetch(`${URL}/topics/${topicId}/widgets`, {
    method: "POST",
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(response => response.json());


export const updateWidget = (widget) =>
  fetch(`${URL}/widgets/${widget.id}`, {
    method: "PUT",
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json',
    }
  })
    .then(response => response.json());

const widgetAPI = {
  findWidgetsForTopic, createWidget, deleteWidget, updateWidget
}

export default widgetAPI