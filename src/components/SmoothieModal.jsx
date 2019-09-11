import React from 'react'
import PropTypes from 'prop-types'

const SmoothieModal = ({ ...props }) => <div {...props}>Deneme</div>

SmoothieModal.propTypes = {
  /**
   * This is a Modal open props
   */
  isShow: PropTypes.bool,
  handleClose: PropTypes.func,
  smallModal: PropTypes.bool,
  Backdrop: PropTypes.bool,
  animation: PropTypes.bool,
  escKey: PropTypes.bool,
  extraStyle: PropTypes.string
}

SmoothieModal.defaultProps = {
  isShow: false,
  smallModal: false,
  Backdrop: false,
  animation: false,
  escKey: false
}

export default SmoothieModal
