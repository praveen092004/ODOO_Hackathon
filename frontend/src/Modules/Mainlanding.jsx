import React from "react";

function Mainlanding() {
    return (
        <>
            <div>
                <div className="heading">
                    <h2 className="headingFont">GlobeTrotter</h2>
                </div>

                <div className="poster welcometext">
                    
                    <h2> Welcome Back Users</h2>
                    <h2 className="profilebox"></h2>
                </div>

                <div className="element">
                    <input type="text" placeholder="Search" className="searchbar" />
                    <input type="text" placeholder="Group By" className="groupby" />
                    <input type="text" placeholder="Filter" className="filter" />
                    <input type="text" placeholder="Sort by" className="sortby" />
                </div>

                <div className="displayflex">
                    <h2>Top Regional Selections</h2>
                    <div className="topselections">
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <hr />
                </div>

                <div className="displayflex">
                    <h2>Previous Trips</h2>
                    <div className="previoustrips">
                        <div className="heighterbox"></div>
                        <div className="heighterbox"></div>
                        <div className="heighterbox"></div>
                        <div className="heighterbox"></div>
                        <div className="heighterbox"></div>
                    </div>
                </div>
            </div>

            {/* Floating Plan a Trip Button */}
            <div className="plan-trip-button">
                <span className="plus-icon">+</span>
                <span>Plan a Trip</span>
            </div>
        </>
    )
}

export default Mainlanding;
