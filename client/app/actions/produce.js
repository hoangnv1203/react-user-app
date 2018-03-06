import prefix from 'helpers/prefix-map'

export const PRODUCE = prefix('PRODUCE', {
  GET_TAGS: 'GET_TAGS',
  SET_TAGS: 'SET_TAGS',
  GET_TEMPLATES: 'GET_TEMPLATES',
  SET_TEMPLATES: 'SET_TEMPLATES'
})

export function getTags() {
  return {
    type: PRODUCE.GET_TAGS
  }
}

export function getTemplates() {
  return {
    type: PRODUCE.GET_TEMPLATES
  }
}