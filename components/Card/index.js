import React from 'react'
import { CardContainer, PlusIcon, StyledImage, TickIcon } from './Style'
import Button from '../Button';
import { useAppContext } from '../../hooks/useAppContext';
import PropTypes from 'prop-types';

const Card = ({isImg, src}) => {

  const { appContext, fetchRandomImage } = useAppContext();
  const handleButtonClick = () => {
    fetchRandomImage(appContext.dispatch);
  }

  const getCardContent = () => {
    if(isImg) {
      return (
        <>
        <TickIcon />
        <StyledImage src={src} layout={'fill'} />
        </>
      ) 
    } else {
      return <Button onClick={handleButtonClick}><PlusIcon /></Button>
    }
  }

  return (
    <CardContainer>
      { getCardContent() }
    </CardContainer>
  )
};

Card.propTypes = {
  isImg: PropTypes.bool,
  src: PropTypes.string
};

export default Card;