import React, { useState } from "react";

const ItineraryScreen = () => {
  const [sections, setSections] = useState([
    { id: 1, title: "Section 1", dateRange: "xxx to yyy", budget: "" },
    { id: 2, title: "Section 2", dateRange: "xxx to yyy", budget: "" },
    { id: 3, title: "Section 3", dateRange: "xxx to yyy", budget: "" },
  ]);

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: Date.now(),
        title: `Section ${sections.length + 1}`,
        dateRange: "xxx to yyy",
        budget: "",
      },
    ]);
  };

  return (
    <div className="screen-container5">
      <div className="itinerary-card5">
        <header className="card-header5">
          <span className="logo-text5"><b>GlobalTrotter</b></span>
          <div className="header-icon5"></div>
        </header>

        <h2 className="screen-title5">Build Itinerary Screen </h2>

        <div className="sections-list5">
          {sections.map((section) => (
            <div key={section.id} className="itinerary-section5">
              <h3>{section.title}:</h3>
              <p className="description5">
                All the necessary information about this section.
                <br />
                This can be anything like travel, hotel, or activity.
              </p>

              <div className="input-group5">
                <div className="info-box5">
                  {/* Date Range: {section.dateRange} */}
                  <label> <b>Start Day : </b> </label>
                  <input type="date" /><br></br> <br></br>
                  <label> <b>End day : </b></label> 
                  <div name = "endday1"><input type="date"  /></div>
                </div>
                <div className="info-box5">
                  {/* Budget: {section.budget || "Not set"} */}
                  <label> <b> Budget of this section</b></label>
                  <input type="text" placeholder="Enter Budget" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="add-button5" onClick={addSection}>
          <span className="plus-icon5">+</span> Add another Section
        </button>
      </div>
    </div>
  );
};

export default ItineraryScreen;
