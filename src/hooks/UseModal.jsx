import React, { useState } from 'react';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, .7);
`;

export const useModal = (Cmp) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const toggle = () => setIsVisibleModal(!isVisibleModal);

  const Modal = (props) => (
    <ModalWrapper onClick={() => toggle()}>
      <Cmp {...props} />
    </ModalWrapper>
  );

  return [Modal, isVisibleModal, toggle];
};
