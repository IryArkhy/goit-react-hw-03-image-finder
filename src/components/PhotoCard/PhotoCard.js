import React, { createRef } from 'react';
import T from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({ imageObj, openModal }) => {
  const iconRef = createRef();
  return (
    <div className={styles.photoCard}>
      <img src={imageObj.webformatURL} alt="" />

      <div className={styles.stats}>
        <p className={styles.statsItem}>
          <i className="material-icons">thumb_up</i>
          {imageObj.likes}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">visibility</i>
          {imageObj.views}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">comment</i>
          {imageObj.comments}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">cloud_download</i>
          {imageObj.downloads}
        </p>
      </div>

      <button
        type="button"
        className={styles.fullscreenButton}
        ref={iconRef}
        onClick={() => {
          openModal(imageObj.largeImageURL);
        }}
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  );
};

PhotoCard.propTypes = {
  imageObj: T.shape({
    webformatURL: T.string.isRequired,
    likes: T.number.isRequired,
    views: T.number.isRequired,
    comments: T.number.isRequired,
    downloads: T.number.isRequired,
    largeImageURL: T.string.isRequired,
  }).isRequired,
  openModal: T.func.isRequired,
};

export default PhotoCard;
