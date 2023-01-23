import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalBox } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static defaultProps = {
    modalImgURL: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      // console.log('close');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { modalImgURL } = this.props;
    return createPortal(
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalBox>
          <img src={modalImgURL} alt="" />
        </ModalBox>
      </ModalOverlay>,
      modalRoot
    );
  }
}
