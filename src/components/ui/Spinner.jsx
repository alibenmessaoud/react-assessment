import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: inline-block;
`;

const SpinnerLabel = styled.div`
  color: ${(props) => (props.color ? props.color : 'blue')};
  font-size:14;
  font-weight: bold;
`;

export const Spinner = ({
  color,
  height,
  label,
  radius,
  width
}) => (
  <SpinnerContainer>
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      aria-label={label}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".5" cx="18" cy="18" r={radius} />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
    <SpinnerLabel color={color}>{label}</SpinnerLabel>
  </SpinnerContainer>
);

Spinner.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  label: PropTypes.string,
  radius: PropTypes.number
};

Spinner.defaultProps = {
  height: 80,
  width: 80,
  color: 'blue',
  label: 'Data is loading ...',
  radius: 18
};
