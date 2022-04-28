import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useAppContext } from '../../hooks/useAppContext';
import Card from '../Card'
import { ApprovedImagesContainer, ApprovedImagesInfo } from './style';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const ApprovedImages = () => {

  const { appContext } = useAppContext();

  const { approvedImages } = appContext.state;

  return (
    <ApprovedImagesContainer>
      <ApprovedImagesInfo>
        Approved Images ({approvedImages.length})
      </ApprovedImagesInfo>
      {approvedImages.length === 0 && <Card /> }
      <div>
        <Carousel responsive={responsive} autoPlay={false} >
          {
            approvedImages.map((item) => {
              return <Card isImg src={item.url} key={item.id} />
            })
          }
        </Carousel>
      </div>
      <br />
    </ApprovedImagesContainer>
  )
}

export default ApprovedImages