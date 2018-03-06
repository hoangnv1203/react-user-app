import React from 'react'
import style from './StepIndicator.style'

class StepIndicator extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    let { overview, detail, preview } = this.props
    let overviewStyle;
    let detailStyle;
    let previewStyle;

    overviewStyle = overview.new ? 'new' : overview.inprogress ? 'inprogress' : 'resolved'
    detailStyle = detail.new ? 'new' : detail.inprogress ? 'inprogress' : 'resolved'
    previewStyle = preview.new ? 'new' : preview.inprogress ? 'inprogress' : 'resolved'

    const steps = this.getSteps(overviewStyle, detailStyle, previewStyle)

    return (
      <div style={style.indicator.div}>
        {steps}
      </div>
    )
  }

  getSteps(overviewStyle, detailStyle, previewStyle) {
    return [
      <ul key="0" style={style.indicator.ul}>
        <li style={style.indicator.liOverview[overviewStyle]} key="0">Bắt đầu chia sẻ ></li>
        <li style={style.indicator.liDetail[detailStyle]} key="1">Mô tả nông sản ></li>
        <li style={style.indicator.liPreview[previewStyle]} key="2">Xác nhận</li>
      </ul>
    ]
  }
}

export default StepIndicator