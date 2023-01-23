import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  HeaderContainer,
  SearchForm,
  FormButton,
  FormButtonLabel,
  FormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSearchQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Заповніть поле пошуку');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);

    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <HeaderContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <FormButton type="submit">
            <FiSearch />
            <FormButtonLabel>Search</FormButtonLabel>
          </FormButton>

          <FormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleSearchQueryChange}
          />
        </SearchForm>
      </HeaderContainer>
    );
  }
}
