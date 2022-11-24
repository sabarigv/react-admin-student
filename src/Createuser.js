import React from "react";

function Createuser() {
  return (
    <>
    <h3>Enter the User Details :</h3>
    <div className="container">
      <br/>
      <div class="input-group">
        <span class="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" class="form-control" />
        <input type="text" aria-label="Last name" class="form-control" />
      </div>
      <br />
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          Position
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Your Position"
          aria-label="Your Position"
          aria-describedby="addon-wrapping"
        />
      </div>
      <br />
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          Office
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Office"
          aria-label="Office"
          aria-describedby="addon-wrapping"
        />
      </div>
      <br />
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          Age
        </span>
        <input
          type="number"
          class="form-control"
          placeholder="Age"
          aria-label="Age"
          aria-describedby="addon-wrapping"
          min="" max=""
        />
      </div>
      <br />
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          Start Date
        </span>
        <input
          type="date"
          class="form-control"
          placeholder="Age"
          aria-label="Age"
          aria-describedby="addon-wrapping"
          min="" max=""
        />
      </div>
      <br />
      <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <span class="input-group-text">0.00</span>
        <input
          type="text"
          class="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
        />
      </div>
      <br />
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
      </div>
    </>
  );
}

export default Createuser;
