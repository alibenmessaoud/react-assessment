import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

const UserInfoItem = ({
  id,
  name,
  username,
  street,
  suite,
  city,
  zipcode,
  email,
  phone
}) => (
  <Row key={id} className="user-info-item">
    <UserInfo>
      <span>{`Name: ${name}`}</span>
      <span>{`Username: ${username}`}</span>
    </UserInfo>
    <div>
      <div>
        <span>{street}</span>
        <span>{suite}</span>
        <span>{city}</span>
        <span>{zipcode}</span>
      </div>
      <div>
        <span>{email}</span>
        <span>{phone}</span>
      </div>
    </div>
  </Row>
);

UserInfoItem.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  username: string.isRequired,
  street: string.isRequired,
  suite: string.isRequired,
  city: string.isRequired,
  zipcode: string.isRequired,
  email: string.isRequired,
  phone: string.isRequired
};

export default UserInfoItem;
