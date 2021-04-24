import { act, renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useFetch } from '@hooks/UseFetch';

describe('useFetch', () => {
  const mock = new MockAdapter(axios);
  const mockData = 'response';
  const url = 'https://some-url';

  it('should be defined', () => {
    expect(useFetch).toBeDefined();
  });

  it('should perform GET request', () => {
    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useFetch(url, {}));

    expect(result.current.response).toEqual(null);
    expect(result.current.error).toEqual(null);
    expect(result.current.isLoading).toBeTruthy();
    act(async () => {
      await waitForNextUpdate();
      expect(result.current.response).toEqual('response');
      expect(result.current.error).toEqual(null);
      expect(result.current.isLoading).toBeFalsy();
    });
  });

  it('should return a network error', () => {
    mock.onGet(url).networkError();

    const { result, waitForNextUpdate } = renderHook(() => useFetch(url, {}));

    expect(result.current.response).toEqual(null);
    expect(result.current.error).toEqual(null);
    expect(result.current.isLoading).toBeFalsy();

    act(async () => {
      await waitForNextUpdate();
      expect(result.current.response).toEqual(null);
      expect(result.current.error).toEqual('Error: Network Error');
      expect(result.current.isLoading).toBeFalsy();
    });
  });
});
