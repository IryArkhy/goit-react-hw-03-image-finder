import React from 'react';
import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/Plane.css';

const LOADER_ROOT = document.querySelector('#loaders');
const spinerStyle = {
  position: 'absolute',
  transform: '50%',
  translate: '50%',
  top: '50%',
  left: '40%',
};

const LoaderSpiner = () =>
  createPortal(
    <Loader
      type="Plane"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={0}
      style={spinerStyle}
    />,
    LOADER_ROOT,
  );

export default LoaderSpiner;
