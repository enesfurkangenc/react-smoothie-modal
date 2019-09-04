# react-smoothie-modal

> react smoothie modal component 🦄

[![NPM](https://img.shields.io/npm/v/react-smoothie-modal.svg)](https://www.npmjs.com/package/react-smoothie-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[**Documentation**](https://react-smoothie-modal.netlify.com/)

## Install

```bash
npm install --save react-smoothie-modal
```

## Usage

```jsx
import React, { Component } from "react";

import SmoothieModal from "react-smoothie-modal";

class Example extends Component {
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
        <SmoothieModal isShow={this.state.modalShow} handleClose={() => this.setState({ modalShow: false })} smallModal Backdrop>
          <div style={{ marginTop: '50px', textAlign: 'center'}}>Smoothie Modal 🦄🦄</div>
        </SmoothieModal>
      </div>
    );
  }}
}
```

## License

MIT © [enesfurkangenc](https://github.com/enesfurkangenc)
