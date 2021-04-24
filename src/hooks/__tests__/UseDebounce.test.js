import { act, renderHook } from '@testing-library/react-hooks';

import { useDebounce } from '@hooks/UseDebounce';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

beforeEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
});

describe('useDebounce', () => {
  it('should be defined', () => {
    expect(useDebounce).toBeDefined();
  });

  it('should return the same value in the initial render', () => {
    const { result } = renderHook(() => useDebounce('text'));
    expect(result.current).toEqual('text');
  });

  it('should debounce the value', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value), {
      initialProps: { value: 'value #1' }
    });

    expect(result.current).toEqual('value #1');

    act(() => {
      rerender({ value: 'value #2' });
    });

    expect(result.current).toEqual('value #1');

    act(() => {
      jest.runAllTimers();
    });

    expect(result.current).toEqual('value #2');
  });

  it('should cleanup the timer', () => {
    const { unmount } = renderHook(() => useDebounce('Hello'));
    expect(clearTimeout).not.toHaveBeenCalled();
    unmount();
    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });
});
