import React, { useState } from "react";
import "./../styles/App.css";
import Step from "./Step";
const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform further submission actions, such as sending data to a server
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      <Step
        step={step}
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        previousStep={previousStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
