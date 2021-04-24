import React from 'react';
import PropTypes from 'prop-types';

export const IconAlert = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    width={size}
    height={size}
  >
    <g>
      <g>
        <path
          fill={color}
          d="M501.362,383.95L320.497,51.474c-29.059-48.921-99.896-48.986-128.994,0L10.647,383.95c-29.706,49.989,6.259,113.291,64.482,113.291h361.736C495.039,497.241,531.068,433.99,501.362,383.95z M256,437.241c-16.538,0-30-13.462-30-30c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30C286,423.779,272.538,437.241,256,437.241zM286,317.241c0,16.538-13.462,30-30,30c-16.538,0-30-13.462-30-30v-150c0-16.538,13.462-30,30-30c16.538,0,30,13.462,30,30V317.241z"
        />
      </g>
    </g>
  </svg>

);

IconAlert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

IconAlert.defaultProps = {
  color: 'black',
  size: 32,
};
