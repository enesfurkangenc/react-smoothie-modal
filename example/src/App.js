import React, { Component } from "react";

import SmoothieModal from "react-smoothie-modal";
import './index.css'

export default class App extends Component {
  state = {
    modalShow: false
  }

  closeModal = () => {
    this.setState({ modalShow: false})
  }

  render() {
    return (
      <div style={{ margin: '30px'}}>
        <button onClick={() => this.setState({ modalShow: true})} className="button">Open Modal</button>
        <SmoothieModal isShow={this.state.modalShow} handleClose={() => this.setState({ modalShow: false })} smallModal>
          <div style={{ marginTop: '50px', textAlign: 'center'}}>Smoothie Modal 🦄🦄</div>
        </SmoothieModal>
      </div>
    );
  }
}
