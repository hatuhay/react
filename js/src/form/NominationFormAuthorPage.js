import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const NominationFormAuthorPage = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="first_name"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="last_name"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'nomination', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(NominationFormAuthorPage);
