import Promise from 'bluebird'
import request from 'superagent'

const url = PRODUCTION ? '' : 'http://192.168.187.134:3000'

export function signUpApi(data) {
  const path = `${url}/api/registration`
  return _post(path, data)
}

export function signInApi(data) {
  const path = `${url}/api/authenticate`
  return _post(path, data)
}

export function signOutApi(token) {
  const path = `${url}/api/signout`
  return _post(path, {token: token})
}

export function getAuthenticationApi(username) {
  const path = `${url}/api/authen/${username}`
  return _get(path)
}

export function getTagsApi() {
  const path = `${url}/api/tags`
  return _get(path)
}

export function getTemplatesApi() {
  const path = `${url}/api/templates`
  return _get(path)
}

function _post(path, data) {
  return new Promise((resolve, reject) => {
    request
      .post(path)
      .accept('application/json')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send(data)
      .end((err, res) => {
        if (err) {
          return reject(err)
        }

        return resolve(res.body)
      })
  })
}

function _get(path) {
  return new Promise((resolve, reject) => {
    request
      .get(path)
      .end((err, res) => {
        if (err) {
          return reject(err)
        }

        return resolve(res.body)
      })
  })
}
