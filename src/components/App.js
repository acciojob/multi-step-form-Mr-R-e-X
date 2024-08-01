import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    make: "",
    model: "",
  });

  const handleNext = (val) => {
    setStep(step + val);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      make: "",
      model: "",
    });
    setStep(1);
  };

  return (
    <div id="main">
      <form onSubmit={(event) => handleSubmit(event)}>
        {step === 1 && (
          <div id={"step" + { step }}>
            <div>
              <label for="firstName">First name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Firstname"
                // value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div>
              <label for="lastName">Last name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Lastname"
                // value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <button type="button" onClick={() => handleNext(1)}>
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div  id={"step" + { step }}>
            <div>
              <label for="make">Make</label>
              <input
                type="text"
                name="make"
                id="make"
                placeholder="make"
                // value={formData.make}
                onChange={(e) =>
                  setFormData({ ...formData, make: e.target.value })
                }
              />
            </div>
            <div>
              <label for="model">Model</label>
              <input
                type="text"
                name="model"
                id="model"
                placeholder="model"
                // value={formData.model}
                onChange={(e) =>
                  setFormData({ ...formData, model: e.target.value })
                }
              />
            </div>

            <button type="button" onClick={() => handleNext(-1)}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default App;
