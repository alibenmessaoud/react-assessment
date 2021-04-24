import React, { useState } from 'react';
import UserInfoList from '@components/taskone/user-info-list/UserInfoList';
import { useFetch } from '@hooks/UseFetch';
import { useDebounce } from '@hooks/UseDebounce';

const UserList = () => {
  const [username, setUsername] = useState('');
  const debouncedUsername = useDebounce(username, 5000);

  const handleInputChange = (e) => setUsername(e.target.value);

  const apiEndpoint = `http://localhost:3001/users${
    debouncedUsername ? `?username=${encodeURIComponent(debouncedUsername)}` : ''}`;

  const {
    response,
    error,
    isLoading
  } = useFetch(apiEndpoint);

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        Loading ...
      </div>
    );
  }

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={handleInputChange}
          value={username}
          placeholder="Enter username"
          data-testid="username-input"
        />
      </div>
      { response && !isLoading
        ? (<UserInfoList users={response} />)
        : ('Loading')}
    </div>
  );
};

export default UserList;
