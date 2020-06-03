import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NominationFormProductPage from './NominationFormProductPage';
import NominationFormAuthorPage from './NominationFormAuthorPage';
import NominationFormSubmitedPage from './NominationFormSubmitedPage';

class NominationForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      page: 1,
    };
  }

  submit() {
    const { onSubmit } = this.props;
    onSubmit();
    this.setState({ page: 1000 });
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  lastPage() {
    this.setState({ page: 999 });
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        {page < 999 && 
          <NominationFormProductPage 
            previousPage={this.previousPage}
            nextPage={this.nextPage}
            onSubmit={this.lastPage}
            page={page}
          />}
        {page === 999 &&
          <NominationFormAuthorPage
            onSubmit={this.submit}
          />}
        {page === 1000 &&
          <NominationFormSubmitedPage />}
      </div>
    );
  }
}

NominationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NominationForm;
