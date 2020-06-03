import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./form/store";
import showResults from "./form/showResults";
import NominationForm from "./form/NominationForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <p className="lead">Welcome to PLMA’s Salute to Excellence Wine Awards, honoring retailers for their private label wine selection. This year, the Awards will be devoted to summer wines. Categories to be judged will be whites, roses, sparkling wines, and chilled, picnic and BBQ reds.</p>
      <div className="row">
        <div className="col-sm-6">
          <h2>Who can nominate wines?</h2>
          <ul>
            <li>Retailers and wholesalers can nominate their own brands.</li>
            <li>Wine producers can nominate wines <strong><em>with the permission of the retailer or wholesaler for whom they produce</em></strong>.</li>
          </ul>
          <h2>What wines are eligible for nomination?</h2>
          <p>Only wines that are owned and distributed by the retailer can be nominated.</p>
          <p><em>Branded wines from wine producers or vineyards that are exclusively sold by the retailer but not owned by the retailer are NOT eligible.</em></p>
          <p><strong><em>DO NOT SEND THE ACTUAL WINES. DETAILED SHIPPING INSTRUCTIONS WILL BE SENT TO YOU UPON CONFIRMATION EMAIL.</em></strong></p>
        </div>
        <div className="col-sm-6">
          <h2>How to nominate:</h2>
          <ol>
            <li>
              <p>Enter the WINE information below.<br />
              If you have an image, browse to the image using the form then click <u>Upload</u>.</p>
            </li>
            <li>
              <p>To enter another WINE, click <u>Next Product</u> at the bottom of the form and a new blank form will appear. Repeat as necessary.</p>
            </li>
            <li>
              <p>After completing the WINE information for all entries, click <u>Nominated By</u>.<br /><br />
              Fill out the form and click <u>Submit</u>. <strong><em>(By filling out the form and submitting the nomination(s) I certify that the wine(s) I nominate is (are) owned and distributed by the retailer listed on the form)</em></strong></p>
            </li>
            <li>
              <p>Your entry will be reviewed by PLMA staff and you will receive a confirmation email. PLMA reserves the right to assign WINES to the category that best represents their use and to add new categories as appropriate. PLMA reserves the right to accept or reject a nomination.</p>
            </li>
            <li>
              <p>The confirmation email will contain detailed shipping instructions. <strong><em>Do not send the wines until you have been notified.</em></strong></p>
            </li>
          </ol>
        </div>
      </div>
      <p>Judging will take place in April in Amsterdam. Award winners will be notified by PLMA.</p>
      <h2>Deadline for nominations: 15 January 2020</h2>
      <p className="form-statement">I have read and agree to the terms and conditions of the Nominating Form of the Salute to Excellence Private Label Wine Awards. By submitting this form, I give PLMA permission to store my contact details in order to send me information by email about PLMA’s programmes.  I have read PLMA’s <a href="https://www.plmainternational.com/privacy-statement" target="_blank">Privacy Statement</a> and I understand that I may discontinue receipt of such information at any time by using the opt-out provisions included in all PLMA email communications.</p>
      <h2 className="form-title">Wine Nomination</h2>
      <NominationForm onSubmit={showResults} />
      <Values form="nomination" />
    </div>
  </Provider>,
  rootEl
);
