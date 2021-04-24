import React from 'react';
import { render } from '@testing-library/react';
import UserInfoList from '@components/taskone/user-info-list/UserInfoList';

describe('UserInfoList', () => {
  it('should be defined', () => {
    expect(UserInfoList).toBeDefined();
  });

  it('should render correctly', () => {
    const users = [
      {
        id: 100,
        name: 'ali',
        username: 'user-ali',
        address: {
          street: 'pasteur',
          suite: 'bloc-a',
          city: 'small-ville',
          zipcode: '9100'
        },
        email: 'ali@email.com',
        phone: '12345678'
      }
    ];

    const { container } = render(<UserInfoList users={users} />);

    const element = container.querySelector('.user-info-items');
    expect(element).toBeDefined();

    const elements = container.querySelectorAll('.user-info-item');
    expect(elements).toBeDefined();
    expect(elements.length).toEqual(1);
  });

  it('should render correctly when there are no users', () => {
    const { container } = render(<UserInfoList users={[]} />);

    const element = container.querySelector('.user-info-items');
    expect(element).toBeDefined();

    expect(container.textContent).toEqual('No users');
  });
});
