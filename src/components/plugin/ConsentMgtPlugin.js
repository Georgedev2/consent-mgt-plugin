import React, { useState } from "react";
import "./consent-mgt-plugin.scss";

const ConsentMgtPlugin = () => {
  const [view, setView] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);

  //This function disable google analytis script on the page if the trackingId is provided  to the component.
  const disableGoogleScript = (trackingId) => {
    if (trackingId) {
      window[`ga-disable-${trackingId}`] = true;
    }
  };

  // This function Take the user to a new view when he/she clicks the reject button & then disabled google analytis script on the page.
  const handleReject = () => {
    setView((preState) => !preState);
    disableGoogleScript();
  };

  // This function takes the user to previous view when the navigation button on the plugin is clicked.
  const goBackToPrevView = () => {
    setView((preState) => !preState);
  };

  //This function unblock the site, allow the user the scroll and then remove the plugin.
  const handleAccept = () => {
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
          <div className="reject-consent-view">
            <div className="reject-consent-view_btn">
              <span onClick={goBackToPrevView}>&#x2190;</span>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eius
            delectus consectetur ipsa voluptas maxime eligendi consequuntur
            provident error eum.
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsentMgtPlugin;
