import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Spinner } from '@components/ui/Spinner';
import { ModalLayout } from '@components/ui/ModalLayout';
import { useModal } from '@hooks/UseModal';
import { IconAlert } from '@components/ui/Icons';

export const DialogModalBodyWrapper = styled.div`
  background: white;
`;

export const SpinnerWrapper = styled.div`
  height: 200px;
  width: 500px;
`;

const InnerDeleteFilesModal = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [isLoading]);

  const Body = () => (
    <DialogModalBodyWrapper>
      <div>This action can not be undone.</div>
    </DialogModalBodyWrapper>
  );

  const footer = [{
    id: 'yes',
    label: 'Yes',
    onClick: () => {
      console.log('yes');
      closeModal();
    },
    type: 'secondary'
  }, {
    id: 'cancel',
    label: 'Cancel',
    onClick: () => {
      console.log('closed only');
      closeModal();
    },
    type: 'primary'
  }];

  const header = {
    icon: <IconAlert size={16} color="red" />,
    title: 'Are you sure you want to delete all of your files?'
  };

  return (
    <div>
      {isLoading
        ? (
          <ModalLayout
            modalBody={(
              <SpinnerWrapper>
                <Spinner label="Data is loading" color="blue" height={80} width={80} />
              </SpinnerWrapper>
            )}
          />
        )
        : (
          <ModalLayout
            modalHeader={header}
            modalBody={<Body />}
            modalFooter={footer}
          />
        )}
    </div>
  );
};

export const DeleteFilesModal = () => {
  const [Modal, show, toggle] = useModal(InnerDeleteFilesModal);

  return (
    <div>
      {show && <Modal closeModal={toggle} />}
      <button onClick={() => toggle()}>Delete files modal</button>
    </div>
  );
};

InnerDeleteFilesModal.propTypes = {
  closeModal: PropTypes.func
};

InnerDeleteFilesModal.defaultProps = {
  closeModal: () => {
  }
};
