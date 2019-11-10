import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import T from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    onClose: T.func.isRequired,
    largeImageURL: T.string.isRequired,
  };

  state = {};

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (this.backdropRef.current && e.target !== this.backdropRef.current)
      return;
    this.props.onClose();
  };

  render() {
    const { largeImageURL } = this.props;
    return createPortal(
      <div
        className={styles.overlay}
        ref={this.backdropRef}
        role="presentation"
        onClick={this.handleBackdropClick}
      >
        <div className={styles.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
