import React from 'react';
import T from 'prop-types';
import PhotoCard from '../PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ images, openModal }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(imageObj => (
        <li key={imageObj.id}>
          <PhotoCard imageObj={imageObj} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  images: T.arrayOf(
    T.shape({
      id: T.number,
      pageURL: T.string,
      type: T.string,
      tags: T.string,
      previewURL: T.string,
      previewWidt: T.number,
      previewHeigh: T.number,
      webformatURL: T.string,
      webformatWidt: T.number,
      webformatHeigh: T.number,
      largeImageURL: T.string,
      fullHDUR: T.string,
      imageUR: T.string,
      imageWidt: T.number,
      imageHeigh: T.number,
      imageSiz: T.number,
      views: T.number,
      downloads: T.number,
      favorites: T.number,
      likes: T.number,
      comments: T.number,
      user_id: T.number,
      user: T.string,
      userImageURL: T.string,
    }).isRequired,
  ).isRequired,
  openModal: T.func.isRequired,
};

export default Gallery;
