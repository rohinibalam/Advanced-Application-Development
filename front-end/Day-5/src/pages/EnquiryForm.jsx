import React, { useState } from "react";
import "../assets/css/EnquiryForm.css";

const EnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="enquiry-container">
      <div className="enquiry-form">
        <div className="form-header">
          <h2>ENQUIRY NOW</h2>
          <span className="close-btn">&times;</span>
        </div>
        <form action="#" method="post">
          <div className="form-row">
            <div className="form-group">
              <label>
                Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control box-shadow-textbox textbox-bg contactTextboxheight"
                name="name"
                placeholder="Name"
                id="user"
                required
              />
            </div>
            <div className="form-group">
              <label>
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control box-shadow-textbox textbox-bg contactTextboxheight"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                Phone<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control box-shadow-textbox textbox-bg contactTextboxheight"
                name="phone"
                placeholder="Phone"
                id="phone"
                required
              />
            </div>
            <div className="form-group">
              <label>
                State<span className="text-danger">*</span>
              </label>
              <select
                className="form-control box-shadow-textbox textbox-bg contactTextboxheight event"
                id="state"
                name="state"
                required
              >
                <option selected disabled>
                  Your State
                </option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="Telangana">Telangana</option>
              </select>
              <div className="text-danger" id="state-msg"></div>
            </div>
          </div>
          <div className="form-group">
            <label>
              City<span className="text-danger">*</span>
            </label>
            <select
              className="form-control box-shadow-textbox textbox-bg contactTextboxheight event"
              id="city"
              name="city"
              required
            >
              <option selected disabled>
                Your City
              </option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="serviceDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select Service
              </button>
              <div class="dropdown-menu" aria-labelledby="serviceDropdown">
                <div class="dropdown-item">
                  <input type="checkbox" id="cakeCheckbox" value="cake" />
                  <label for="cakeCheckbox">Cake</label>
                </div>
                <div class="dropdown-item">
                  <input
                    type="checkbox"
                    id="decorationCheckbox"
                    value="decoration"
                  />
                  <label for="decorationCheckbox">Decoration</label>
                </div>
                <div class="dropdown-item">
                  <input
                    type="checkbox"
                    id="entertainmentCheckbox"
                    value="entertainment"
                  />
                  <label for="entertainmentCheckbox">Entertainment</label>
                </div>
                <div class="dropdown-item">
                  <input type="checkbox" id="foodCheckbox" value="food" />
                  <label for="foodCheckbox">Food</label>
                </div>
                <div class="dropdown-item">
                  <input
                    type="checkbox"
                    id="photographyCheckbox"
                    value="photography"
                  />
                  <label for="photographyCheckbox">Photography</label>
                </div>
                <div class="dropdown-item">
                  <input
                    type="checkbox"
                    id="returnGiftCheckbox"
                    value="return_gift"
                  />
                  <label for="returnGiftCheckbox">Return Gift</label>
                </div>
              </div>
            </div>
            <input type="text" className="selected-options-input" readOnly />
          </div>

          <div className="form-group">
            <label>Celebration Date</label>
            <input
              type="date"
              className="form-control box-shadow-textbox textbox-bg contactTextboxheight"
              name="celebrationDate"
              id="celebrationDate"
            />
          </div>
          <div className="form-group">
            <label>Price Range</label>
            <input
              type="text"
              className="form-control box-shadow-textbox textbox-bg contactTextboxheight"
              name="priceRange"
              placeholder="Price Range"
              id="priceRange"
            />
          </div>
          <div className="form-group">
            <label htmlFor="requirements">Your Requirements</label>
            <textarea
              className="form-control box-shadow-textbox textbox-bg contactTextboxheight"
              name="requirements"
              id="requirements"
              rows="4"
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventIdeas">Submit Your Event Ideas</label>
            <input
              type="file"
              id="eventIdeas"
              name="eventIdeas"
              accept=".pdf,.doc,.docx"
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                id="termsConditions"
                name="termsConditions"
                required
              />
              I have read and accept the terms and conditions.
            </label>
          </div>
          <button type="submit" className="submit-btn bg-black">
            Submit
          </button>
        </form>
      </div>
      {submitted && (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>We will call you shortly.</p>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
