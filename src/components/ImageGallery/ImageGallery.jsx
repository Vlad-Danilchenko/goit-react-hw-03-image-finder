import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ imageArray, onClick }) => {
  return (
    <GalleryList>
      {imageArray.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          imgURL={webformatURL}
          modalImgURL={largeImageURL}
          onImgClick={onClick}
        />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  imageArray: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
