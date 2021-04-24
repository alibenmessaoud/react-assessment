import React, { memo } from 'react';
import styled from 'styled-components';
import UserInfoItem from '@components/taskone/user-info-item/UserInfoItem';
import {
  arrayOf, number, shape, string
} from 'prop-types';

const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

const UserInfoList = ({ users }) => (
  <Users className="user-info-items">
    {users && users.length > 0 ? users.map((user) => (
      <UserInfoItem
        key={user.id}
        id={user.id}
        name={user.name}
        username={user.username}
        street={user.address.street}
        suite={user.address.suite}
        city={user.address.city}
        zipcode={user.address.zipcode}
        email={user.email}
        phone={user.phone}
      />
    )) : 'No users'}
  </Users>
);

UserInfoList.propTypes = {
  users: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
    username: string.isRequired,
    address: shape({
      street: string.isRequired,
      suite: string.isRequired,
      city: string.isRequired,
      zipcode: string.isRequired
    }).isRequired,
    email: string.isRequired,
    phone: string.isRequired
  }).isRequired).isRequired
};

export default memo(UserInfoList);
