import { PRODUCE } from 'actions/produce'

let initialState = {
  tags: [],
  templates: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCE.SET_TAGS:
      return Object.assign({}, state, {
        tags: action.tags
      })

    case PRODUCE.SET_TEMPLATES:
      return Object.assign({}, state, {
        templates: action.templates
      })
  }

  return state
}
