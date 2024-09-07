import React from 'react';

import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import imageStyle from './image.module.scss';

const ImageModel = ({ img, scrollPosition }: any) => {

  return (
    <div className={imageStyle.imageModelContainer}>
        <LazyLoadImage
          alt={img.alt}
          src={img.imgUrl}
          effect="blur"
          loading='lazy'
          height={img.height}
          wrapperProps={{ style: {transitionDelay: "1s"} }}
          scrollPosition={scrollPosition}
        />
        <span>{img.caption}</span>
    </div>
  )
};

export default trackWindowScroll(ImageModel);


