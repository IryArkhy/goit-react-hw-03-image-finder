import React, { Component } from 'react';
import T from 'prop-types';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  static propTypes = {
    onSearch: T.func.isRequired,
  };

  state = {
    imageKeyWord: '',
  };

  handleChange = e => {
    this.setState({
      imageKeyWord: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.imageKeyWord);
    this.setState({
      imageKeyWord: '',
    });
  };

  render() {
    const { imageKeyWord } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          onChange={this.handleChange}
          value={imageKeyWord}
        />
      </form>
    );
  }
}

export default SearchForm;
