import React, { useState } from "react";
import "./consent-mgt-plugin.scss";

const ConsentMgtPlugin = () => {
  const [view, setView] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);

  const disableGoogleScript = (trackingId="trackingId") => {

    //disable google analytis script on the page if the propertyID is provided
    if (trackingId) {
      window[`ga-disable-${trackingId}`] = true;
    }
  };

  const handleReject = () => {
    //Take the user to a new view
    setView((preState) => !preState);
    //Then disabled google analytis script on the page
    disableGoogleScript();
  };

  const goBackToPrevView = () => {
    setView((preState) => !preState);
  };

  const handleAccept = () => {
    // unblock the site & remove the plugin
    setIsAccepted((prevState) => !prevState);
  };

  return (
    <div className="consent-mgt-plugin">
      <div className={`consent-wrapper ${isAccepted && "hide-wrapper"}`}>
        <div className="overlay"></div>
        {view ? (
          <div className="consent">
            <div>
              This site's privacy policy include the use of Google Analytics tag
              to get some information about the users, use any of the below
              buttons to either accept or opt-out of the Google Analytics
              measurement.
            </div>
            <div className="btns-wrapper">
              <div className="accept-btn" onClick={handleAccept}>
                Accept
              </div>
              <div className="reject-btn" onClick={handleReject}>
                Reject
              </div>
            </div>
          </div>
        ) : (
          <div className="view">
            
            <div className="view_navigation">
              <span onClick={goBackToPrevView}>&#x2190;</span>
            </div>
            hsadhjjasdhjajkdbc m chcbz zbx e Analytics tag to get some
            information about the users, use any of the below buttons to either
            accept or opt-out of the Google Analytics measurement.
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsentMgtPlugin;

// reject-consent-view
