import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import LinkButton from 'components/Button/LinkButton'
import AuthRequired from 'components/AuthRequired'
import TextBox from 'components/inputs/TextBox'
import SelectBox from 'components/inputs/SelectBox'

//@AuthRequired
@reduxForm({ form: 'overviewProduce' })
@connect((state) => ({
  templates: state.produce.templates,
  tags: state.produce.tags
}))
@Radium
class Overview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label>Tags</label><br />
            <Field name="tags" component="select">
              <option />
              { this.props.tags.map((tag, index) => (
                <option key={index} value={tag.name}>{tag.name}</option>
              )) }
            </Field>
          </div>
          <div>
            <label>Name</label><br />
            <Field name="templates" component="select">
              <option />
              { this.props.templates.map((template, index) => (
                <option key={index} value={template.name}>{template.name}</option>
              )) }
            </Field>
          </div>
        </form>
        <br />
        <LinkButton link="/create-produce/detail">Produce Create Detail</LinkButton>
      </div>
    )
  }
}

export default Overview
