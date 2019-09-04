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
  Backdrop: PropTypes.bool
}

SmoothieModal.defaultProps = {
  isShow: false,
  smallModal: false,
  Backdrop: false
}

export default SmoothieModal
