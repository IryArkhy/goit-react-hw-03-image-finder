import React from 'react';

import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LOADER_ROOT = document.querySelector('#loaders');

const LoaderSpiner = () =>
  createPortal(
    <Loader type="ThreeDots" color="#00BFFF" timeout={0} />,
    LOADER_ROOT,
  );

export default LoaderSpiner;
