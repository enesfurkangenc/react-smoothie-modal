import React, { Component } from "react";

import SmoothieModal from "react-smoothie-modal";
import './index.css'

export default class App extends Component {
  state = {
    modalShow: false,
    normalModalShow: false,
    backdropShow: false
  }

  render() {
    return (
      <div style={{ margin: '30px'}}>
        <button onClick={() => this.setState({ modalShow: true})} className="button" style={{ marginRight: '10px'}}>Open Modal Small</button>
        <button onClick={() => this.setState({ backdropShow: true})} className="button" style={{ marginRight: '10px'}}>Backdrop</button>
        <button onClick={() => this.setState({ normalModalShow: true})} className="button">Open Modal Normal</button>
        <SmoothieModal isShow={this.state.modalShow} handleClose={() => this.setState({ modalShow: false })} smallModal >
          <div style={{ marginTop: '50px', textAlign: 'center'}}>Smoothie Modal 🦄🦄</div>
        </SmoothieModal>
        <SmoothieModal isShow={this.state.normalModalShow} handleClose={() => this.setState({ normalModalShow: false })}>
          <div style={{ marginTop: '50px', textAlign: 'center'}}>Smoothie Modal 🦄🦄</div>
        </SmoothieModal>
        <SmoothieModal isShow={this.state.backdropShow} handleClose={() => this.setState({ backdropShow: false })} Backdrop>
          <div style={{ marginTop: '50px', textAlign: 'center'}}>Smoothie Modal 🦄🦄</div>
        </SmoothieModal>
      </div>
    );
  }
}
