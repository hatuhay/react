import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group row">
    <label className="col-sm-3 col-form-label">{label}</label>
    <div className="col-sm-9">
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  </div>
);

export default renderField;
