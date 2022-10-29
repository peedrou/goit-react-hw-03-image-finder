import PropTypes from 'prop-types';
import {ImageGalleryInfo, Image} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
    webformatURL,
    largeImageURL,
    onImage,
    }) => {
    return (
      <ImageGalleryInfo onClick={() => onImage(largeImageURL)}>
        <Image src={webformatURL} alt='' />
      </ImageGalleryInfo>
    );
  };


ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onImage: PropTypes.func.isRequired,
  };
