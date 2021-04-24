import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Spinner } from '@components/ui/Spinner';
import { ModalLayout } from '@components/ui/ModalLayout';
import { useModal } from '@hooks/UseModal';

export const SpinnerWrapper = styled.div`
  height: 200px;
  width: 500px;
`;

const InnerAlwaysLoadingModal = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
  }, [isLoading]);

  return (
    <ModalLayout
      modalBody={(
        <SpinnerWrapper onClick={closeModal}>
          <Spinner label="Data is loading" color="blue" height={80} width={80} />
        </SpinnerWrapper>
      )}
    />
  );
};

export const AlwaysLoadingModal = () => {
  const [Modal, show, toggle] = useModal(InnerAlwaysLoadingModal);

  return (
    <div>
      {show && <Modal closeModal={toggle} />}
      <button onClick={() => toggle()}>Data loading modal</button>
    </div>
  );
};

InnerAlwaysLoadingModal.propTypes = {
  closeModal: PropTypes.func
};

InnerAlwaysLoadingModal.defaultProps = {
  closeModal: () => {
  }
};
