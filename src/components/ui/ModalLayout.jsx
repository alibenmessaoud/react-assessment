import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ModalContainerWrapper = styled.div`
  border-radius: 14px;
  border: 2px solid red;
  background: white;
  padding: 10px;
  text-align: left;
  max-width: 500px;
`;

export const DialogModalHeaderWrapper = styled.div`
  max-height: 25px;
  padding: 5px;
  border-bottom: 1px solid gray;
  margin: 0 0 10px 0;
`;

export const DialogModalFooterWrapper = styled.div`
  max-height: 30px;
  width: 500px;
  padding: 5px;
  text-align: right;
  margin: 0 0 10px 0;
`;

export const ModalButton = styled.button`
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px 10px;
  height: auto;
  cursor: pointer;
  outline: none;
  margin: 0 0 10px 5px;
  border: 1px solid;
  border-color: ${(props) => (props.type === 'primary' ? '#23619A' : '#E8F4FF')}; 
  color: ${(props) => (props.type === 'primary' ? '#23619A' : '#23619A')};
  background: ${(props) => (props.type === 'primary' ? 'white' : '#E8F4FF')};
`;

export const ModalLayout = ({
  modalHeader,
  modalBody,
  modalFooter
}) => (
  <ModalContainerWrapper>
    {modalHeader && (
      <DialogModalHeaderWrapper>
        {modalHeader.icon}
        {' '}
        {modalHeader.title}
      </DialogModalHeaderWrapper>
    )}
    <div>{modalBody}</div>
    <DialogModalFooterWrapper>
      {modalFooter
      && modalFooter.length > 0
      && modalFooter.map(({ onClick, label, type }, index) => (
        <ModalButton key={index.toString()} onClick={onClick} type={type}>
          {label}
        </ModalButton>
      ))}
    </DialogModalFooterWrapper>
  </ModalContainerWrapper>
);

ModalLayout.propTypes = {
  modalHeader: PropTypes.objectOf(PropTypes.shape({
    icon: PropTypes.object,
    title: PropTypes.string
  })),
  modalBody: PropTypes.object.isRequired,
  modalFooter: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary'])
  }))
};

ModalLayout.defaultProps = {
  modalHeader: null,
  modalFooter: null
};
