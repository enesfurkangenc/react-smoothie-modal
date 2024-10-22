import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

import styles from './styles.css'
import Icon from './Icon/cancel.svg'

export default class SmoothieModal extends Component {
  static propTypes = {
    isShow: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    handleClose: PropTypes.func,
    smallModal: PropTypes.bool,
    Backdrop: PropTypes.bool,
    animation: PropTypes.bool,
    escKey: PropTypes.bool,
    extraStyle: PropTypes.string
  }
  escFunc = (event) => {
    if (this.props.escKey) {
      if (event.keyCode === 27) {
        this.props.handleClose()
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunc, false)
  }

  render() {
    const { children, handleClose, smallModal, Backdrop, animation, extraStyle } = this.props

    const Modal = () => {
      let globalAnimation = ClassNames(styles.global, animation ? styles.overlay_animate_fade : null)
      let extraCss = ClassNames(smallModal ? styles.global_inner_small : styles.global_inner, extraStyle || null)
      return (
        <div className={globalAnimation}>
          <div className={styles.global_background} onClick={Backdrop ? handleClose : null} />
          <div className={extraCss}>
            <div
              className={styles.global_close_button}
              onClick={handleClose}
            >
              <img
                src={Icon}
                alt='Close Modal'
                className={styles.global_close_image}
              />
            </div>
            {children}
          </div>
        </div>
      )
    }

    return this.props.isShow ? <Modal /> : null
  }
}
