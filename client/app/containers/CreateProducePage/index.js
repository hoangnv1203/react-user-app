import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { redirect } from 'actions/routing'

import LinkButton from 'components/Button/LinkButton'
import AuthRequired from 'components/AuthRequired'
import StepIndicator from 'components/CreateProduce/StepIndicator'
import Overview from 'components/CreateProduce/overview'
import Detail from 'components/CreateProduce/detail'
import Preview from 'components/CreateProduce/preview'

import { getTags, getTemplates } from 'actions/produce'

import style from './index.style'

// @AuthRequired
@connect()
@Radium
class ProduceCreatePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      overview: {
        new: false,
        inprogress: true,
        resolved: false
      },
      detail: {
        new: true,
        inprogress: false,
        resolved: false
      },
      preview: {
        new: false,
        inprogress: false,
        resolved: false
      }
    }

    this.props.dispatch(getTags())
    this.props.dispatch(getTemplates())
  }

  render() {
    let { match } = this.props

    return (
      <div style={style.container}>
        <div>
          <StepIndicator
            overview={this.state.overview}
            detail={this.state.detail}
            preview={this.state.preview} />
        </div>
        <div>
          <div>
            <button onClick={this._redirectTo.bind(this, '/create-produce/overview')}>Overview</button>
            <button onClick={this._redirectTo.bind(this, '/create-produce/detail')}>Detail</button>
            <button onClick={this._redirectTo.bind(this, '/create-produce/preview')}>Preview</button>
          </div>
          <Route exact path={`${match.path}/overview`} component={Overview} />
          <Route exact path={`${match.path}/detail`} component={Detail} />
          <Route exact path={`${match.path}/preview`} component={Preview} />
        </div>
      </div>
    )
  }
  _redirectTo(pathname) {
    let { dispatch } = this.props

    dispatch(redirect(pathname))
  }
}

export default ProduceCreatePage
