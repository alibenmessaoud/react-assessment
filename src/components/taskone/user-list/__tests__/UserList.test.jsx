import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import UserList from '@components/taskone/user-list/UserList';
import { useFetch } from '@hooks/UseFetch';

jest.mock('@hooks/UseFetch');

describe('UserList', () => {
  it('should be in loading state', () => {
    useFetch.mockReturnValue({
      response: [],
      error: null,
      isLoading: true
    });

    const { getByText } = render(<UserList />);
    expect(getByText('Loading ...')).toBeInTheDocument();
  });

  it('should be in error state', () => {
    useFetch.mockReturnValue({
      response: [],
      error: 'server error',
      isLoading: false
    });

    const { getByText } = render(<UserList />);
    expect(getByText('server error')).toBeInTheDocument();
  });

  it('should render the users', () => {
    useFetch.mockReturnValue({
      response: [{
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
      }],
      error: null,
      isLoading: false
    });

    const { container } = render(<UserList />);

    const userItemsContainer = container.querySelector('.user-info-items');
    expect(userItemsContainer).toBeDefined();

    const userItems = container.querySelectorAll('.user-info-item');
    expect(userItems).toBeDefined();
    expect(userItems.length).toEqual(1);
  });

  it('filters data by username', async () => {
    useFetch.mockReturnValue({
      response: [{
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
      }, {
        id: 101,
        name: 'bm',
        username: 'user-bm',
        address: {
          street: 'belleville',
          suite: 'A',
          city: 'gif',
          zipcode: '4100'
        },
        email: 'bm@email.com',
        phone: '87654321'
      }],
      error: null,
      isLoading: false
    });

    const { container, getByTestId } = render(<UserList />);

    const usernameInput = getByTestId('username-input');
    fireEvent.change(usernameInput, { target: { value: 'bm' } });

    useFetch.mockReturnValue({
      response: [{
        id: 101,
        name: 'bm',
        username: 'user-bm',
        address: {
          street: 'belleville',
          suite: 'A',
          city: 'gif',
          zipcode: '4100'
        },
        email: 'bm@email.com',
        phone: '87654321'
      }],
      error: null,
      isLoading: false
    });

    const userItemsContainer = container.querySelector('.user-info-items');
    expect(userItemsContainer).toBeDefined();

    let userItems = container.querySelectorAll('.user-info-item');
    expect(userItems).toBeDefined();
    expect(userItems.length).toEqual(2);

    await waitFor(() => {
      userItems = container.querySelectorAll('.user-info-item');
      expect(userItems).toBeDefined();
      expect(userItems.length).toEqual(1);
    }, { timeout: 5000, container });
  });
});
