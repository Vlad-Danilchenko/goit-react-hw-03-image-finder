import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { AppContainer } from './App.styled';

const PERSONAL_KEY = '29444023-fe7d4e5e60b2e765be0bef471';

export class App extends Component {
  state = {
    imageArray: null,
    searchQuery: '',
    loading: false,
    showModal: false,
    modalImg: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const { page } = this.state;
    if (prevQuery !== nextQuery || prevState.page !== page) {
      this.setState({ loading: true, imageArray: null });
      fetch(
        `https://pixabay.com/api/?q=${nextQuery}&page=${page}&key=${PERSONAL_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          return res.json();
        })
        .then(imageArray => {
          this.setState({ imageArray: imageArray.hits });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  loadMore = () => {
    // console.log(this.state.page);
    this.setState({ page: this.state.page + 1 });
  };

  toggleModal = modalImgURL => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
    this.setState({ modalImg: modalImgURL });
    console.log(modalImgURL);
  };

  handleSearchSubmit = searchQuery => {
    // console.log(searchQuery);
    this.setState({ searchQuery, page: 1 });
  };

  render() {
    const { imageArray, loading, showModal, modalImg } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {imageArray && (
          <ImageGallery imageArray={imageArray} onClick={this.toggleModal} />
        )}
        {imageArray && <Button onLoadMore={this.loadMore} />}
        {loading && <Loader />}
        {showModal && (
          <Modal modalImgURL={modalImg} onClose={this.toggleModal} />
        )}

        <ToastContainer autoClose={3000} theme="colored" />
      </AppContainer>
    );
  }
}
