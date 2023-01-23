import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <LoadMoreBtn onClick={onLoadMore} type="button">
      Load more
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
