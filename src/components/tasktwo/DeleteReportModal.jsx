import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
export const ListWrapper = styled.div`
  border: 1px solid gray;
  padding: 5px;
  height: 110px;
  overflow-y: scroll;
`;

const InnerDM = ({ closeModal }) => {
  const Body = () => {
    const list = [
      {
        id: 1,
        title: 'January 2020'
      },
      {
        id: 2,
        title: 'February 2020'
      },
      {
        id: 3,
        title: 'March 2020'
      },
      {
        id: 4,
        title: 'April 2020'
      },
      {
        id: 5,
        title: 'May 2020'
      },
      {
        id: 6,
        title: 'June 2020'
      },
      {
        id: 7,
        title: 'July 2020'
      },
    ];

    return (
      <DialogModalBodyWrapper>
        <ListWrapper>
          {list.map((value, index) => (<div key={index.toString()}>{value.title}</div>))}
        </ListWrapper>
        Please type the word &apos;DELETE&apos; to remove the
        <strong> Executive metrics </strong>
        report and its associated history:
        <br />
        <input type="text" />
      </DialogModalBodyWrapper>
    );
  };

  const footer = [{
    id: 'deleteAll',
    label: 'Delete all',
    onClick: () => {
      console.log('delete all and close');
      closeModal();
    },
    type: 'secondary'
  }, {
    id: 'cancel',
    label: 'Cancel',
    onClick: () => {
      console.log('cancel and closed only');
      closeModal();
    },
    type: 'primary'
  }];

  const header = {
    icon: <IconAlert size={16} color="red" />,
    title: 'Are you sure you want to delete this report and its history?'
  };

  return (
    <ModalLayout
      modalHeader={header}
      modalBody={<Body />}
      modalFooter={footer}
    />
  );
};

export const DeleteReportModal = () => {
  const [Modal, show, toggle] = useModal(InnerDM);

  return (
    <div>
      {show && <Modal closeModal={toggle} />}
      <button onClick={() => toggle()}>Delete files modal</button>
    </div>
  );
};

InnerDM.propTypes = {
  closeModal: PropTypes.func
};

InnerDM.defaultProps = {
  closeModal: () => {
  }
};
