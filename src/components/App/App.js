import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import LoaderSpiner from '../Loader';
import api from '../../servises/image-api';
import SearchForm from '../SearchForm';
import Gallery from '../Gallery';
import Modal from '../Modal';
import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class App extends Component {
  state = {
    keyWord: '',
    images: [],
    pageNumber: 1,
    isModalOpen: false,
    largeImageURL: '',
    error: null,
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { images } = this.state;
    if (prevState.images !== images) {
      const { scrollHeight, scrollTop, offsetHeight } = document.body;
      const distanceFromBottom = scrollHeight - (scrollTop + offsetHeight);
      return { shouldScroll: distanceFromBottom < 150 };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { keyWord } = this.state;
    if (prevState.keyWord !== keyWord) {
      /* eslint-disable-next-line */
      this.setState({
        images: [],
      });
      this.fetchImages();
    }

    if (snapshot && snapshot.shouldScroll) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onSearch = query => {
    this.setState({
      keyWord: query,
      pageNumber: 1,
    });
  };

  fetchImages = () => {
    this.setState({
      isLoading: true,
    });

    api(this.state.keyWord, this.state.pageNumber)
      .then(images =>
        this.setState(state => ({
          images: [...state.images, ...images],
          pageNumber: state.pageNumber + 1,
        })),
      )
      .catch(error => {
        this.setState({ error });
        toast.error('Something went wrong');
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  openModal = largeImageURL => {
    this.setState({ isModalOpen: true, largeImageURL });
  };

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { images, isLoading, isModalOpen, largeImageURL, error } = this.state;

    return (
      <div className={styles.app}>
        <SearchForm onSearch={this.onSearch} />
        {images.length > 0 && (
          <Gallery
            images={images}
            openModal={this.openModal}
            // onFocus={this.onFocus}
            // onMouseOver={this.onMouseOver}
          />
        )}

        {isLoading && <LoaderSpiner />}
        {images.length > 0 && (
          <button
            type="button"
            className={styles.button}
            onClick={this.fetchImages}
          >
            Load More
          </button>
        )}
        {isModalOpen && (
          <Modal onClose={this.closeModal} largeImageURL={largeImageURL} />
        )}
        {error && <ToastContainer />}
      </div>
    );
  }
}

export default App;
