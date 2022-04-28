import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import { ButtonContainer, ContainerInfo, FormContainer, ImageContainer, Info } from './style'
import { Cross } from '@styled-icons/entypo/Cross';
import { Tick } from '@styled-icons/typicons/Tick';
import { PatchPlusFill } from '@styled-icons/bootstrap/PatchPlusFill'
import { useAppContext } from '../../hooks/useAppContext';

const ApprovalForm = () => {

  const { appContext, fetchRandomImage } = useAppContext();

  const { currentImage, rejectedImages } = appContext.state;
  const { dispatch } = appContext;

  const handleButtonClick = () => {
    fetchRandomImage(appContext.dispatch);
  }

  const getContainerInfo = () => (
    <ContainerInfo>
      <Info>
        Click on the Plus(+) on top to add Image or Click on the below Add button to add Image
      </Info>
      <Button bgcolor="gray" onClick={handleButtonClick}>Add Image <PatchPlusFill size={24} /> </Button>
    </ContainerInfo>
  )

  const getImageContent = () => {
    const isImagePreviouslyRejected = rejectedImages.find((image) => {
      return image.id === currentImage.id
    });
    if(isImagePreviouslyRejected) {
      fetchRandomImage(appContext.dispatch);
      return null;
    }
    return <>
      <Image src={currentImage.url} layout={'fill'} alt=""  />
    </>
  }

  const handleImageRejection = () => {
    dispatch({ type: "IMAGE_REJECTED", data: currentImage });
    fetchRandomImage(dispatch);
  }

  const handleImageApproval = () => {
    dispatch({ type: "IMAGE_APPROVED", data: currentImage });
  }

  return (
    <FormContainer>
      <ImageContainer>
        {!currentImage && getContainerInfo()}
        {currentImage && getImageContent()}
      </ImageContainer>
      <ButtonContainer>
        <Button bgcolor="black" width={'40%'} onClick={currentImage && handleImageRejection}>Reject <Cross size={24} /></Button>
        <Button bgcolor="blue" width={'40%'} onClick={currentImage && handleImageApproval}>Approve <Tick size={24} /></Button>
      </ButtonContainer>
    </FormContainer>
  )
}

export default ApprovalForm;