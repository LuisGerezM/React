import { useState, Fragment } from 'react';

import { ElementSpinner } from '../custom-spinners';

import { Image } from './styles';

export const CustomImage = ({ imgClass = '', src, alt, title = '', imgWidth, imgHeight }) => {
  const [loadImg, setLoadImg] = useState(true);

  return (
    <Fragment>
      {loadImg && <ElementSpinner />}
      <Image
        className={`custom-image ${imgClass}`}
        src={src}
        alt={alt}
        title={title}
        imgwidth={imgWidth}
        imgHeight={imgHeight}
        loadimg={loadImg.toString()}
        onLoad={() => setLoadImg(false)}
      />
    </Fragment>
  );
};
