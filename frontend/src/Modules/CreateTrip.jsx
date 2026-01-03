const CreateTrip = () => {
    return (
         <div className="trip-container">
      {/* Header */}
      <div className="trip-header">
        <h2>GlobalTrotter</h2>
        {/* <div className="profile-circle"></div> */}
      </div>

      {/* Form Section */}
      <div className="trip-form">
        <h3>Plan a new trip</h3>

        <div className="form-row">
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Select a Place</label>
            <input type="text" placeholder="Enter destination" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Start Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input type="date" />
          </div>
        </div>
          <div className="form-row">
          <button className="plan-trip-btn">Plan Trip</button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="suggestions">
        <h4>Suggestions for Places to Visit / Activities to Perform</h4>

        <div className="card-grid">
          <div className="suggestion-card"></div>
          <div className="suggestion-card"></div>
          <div className="suggestion-card"></div>
          <div className="suggestion-card"></div>
          <div className="suggestion-card"></div>
          <div className="suggestion-card"></div>
          <div className="suggestion-card"></div>
          <div className="suggestion-card"></div>
          <div className="suggestion-card"></div>
          <div className="suggestion-card"></div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
