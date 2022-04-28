import React from 'react';
import { StyledButton } from './style';
import PropTypes from 'prop-types';

const Button = ({bgcolor, color, children, onClick, width}) => {

  const handleButtonClick = () => {
    if(onClick) {
      onClick();
    }
  }
  return (
    <>
        <StyledButton id="button" onClick={handleButtonClick} color={color} bgcolor={bgcolor} width={width}>{children}</StyledButton>
    </>
  )
}

Button.propTypes = {
  bgcolor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string
};

export default Button;