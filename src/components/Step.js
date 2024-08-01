import React from "react";

const Step = ({
  step,
  formData,
  handleChange,
  nextStep,
  previousStep,
  handleSubmit,
}) => {
  return (
    <form>
      {step === 1 && (
        <div id="step1">
          <div>
            <label>First Name</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div id="step2">
          <div>
            <label>Car Model</label>
            <input
              type="text"
              id="model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Car Price</label>
            <input
              type="text"
              id="car_price"
              value={formData.car_price}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div id="step3">
          <div>
            <label>Card Information</label>
            <input
              type="text"
              id="card_info"
              value={formData.card_info}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Expiry Date</label>
            <input
              type="text"
              id="expiry_date"
              value={formData.expiry_date}
              onChange={handleChange}
            />
          </div>
        </div>
      )}

      <div>
        {step > 1 && (
          <button type="button" onClick={previousStep}>
            Previous
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        )}
        {step === 3 && (
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default Step;
