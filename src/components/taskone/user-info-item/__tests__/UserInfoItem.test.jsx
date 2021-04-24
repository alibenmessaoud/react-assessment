import React from 'react';
import { render } from '@testing-library/react';

import UserInfoItem from '../UserInfoItem';

describe('UserInfoItem', () => {
  it('should be defined', () => {
    expect(UserInfoItem).toBeDefined();
  });

  it('should render user info item correctly', () => {
    const { container, getByText } = render(
      <UserInfoItem
        id={1000}
        name="ali"
        username="user-ali"
        street="pasteur"
        suite="bloc-a"
        city="small-ville"
        zipcode="9100"
        email="ali@email.com"
        phone="12345678"
      />
    );

    const element = container.querySelector('.user-info-item');
    expect(element).toBeDefined();

    expect(getByText('Name: ali')).toBeInTheDocument();
    expect(getByText('Username: user-ali')).toBeInTheDocument();
    expect(getByText('pasteur')).toBeInTheDocument();
    expect(getByText('bloc-a')).toBeInTheDocument();
    expect(getByText('small-ville')).toBeInTheDocument();
    expect(getByText('9100')).toBeInTheDocument();
    expect(getByText('ali@email.com')).toBeInTheDocument();
    expect(getByText('12345678')).toBeInTheDocument();
  });
});
