import {take, put, call} from 'redux-saga/effects'
import { PRODUCE } from 'actions/produce'

import { getTagsApi, getTemplatesApi } from 'services/rest'

export function *getTags() {
  while(true) {
    let action = yield take(PRODUCE.GET_TAGS)

    let tags = yield call(getTagsApi)

    yield put({
      type: PRODUCE.SET_TAGS,
      tags: tags
    })
  }
}

export function *getTemplates() {
  while(true) {
    let action = yield take(PRODUCE.GET_TEMPLATES)

    let templates = yield call(getTemplatesApi)

    yield put({
      type: PRODUCE.SET_TEMPLATES,
      templates: templates
    })
  }
}