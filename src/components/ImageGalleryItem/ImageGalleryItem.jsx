import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imgURL, onImgClick, modalImgURL }) => {
  return (
    <GalleryItem>
      <Image
        alt=""
        src={imgURL}
        onClick={() => {
          onImgClick(modalImgURL);
        }}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  imgURL: PropTypes.string.isRequired,
  modalImgURL: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
