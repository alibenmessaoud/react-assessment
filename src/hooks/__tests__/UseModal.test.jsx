import React from 'react';
import { useModal } from '@hooks/UseModal';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';

describe('UseModal', () => {
  it('should be defined', () => {
    expect(useModal).toBeDefined();
  });

  it('should render modal', () => {
    const { result } = renderHook(() => useModal(() => <span>test</span>));
    const Modal = result.current[0];
    const show = result.current[1];
    const toggle = result.current[2];

    expect(Modal).toBeTruthy();
    expect(show).toBeFalsy();
    expect(toggle).toBeTruthy();

    const { container } = render(<div>{show && <Modal closeModal={toggle()} />}</div>);
    expect(container.innerHTML).toEqual('<div></div>');
  });
});
