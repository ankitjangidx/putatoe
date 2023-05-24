import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMobileScreenButton,
  faTv,
  faIndianRupeeSign,
  faNewspaper,
  faBlog,
  faPeopleGroup,
  faBullhorn,
  faLightbulb,
  faFire,
  faDroplet,
  faMessage,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function Services() {
  return (
    <div className="flex justify-center p-4 bg-slate-100">
      <div>
  
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          size="2xl"
          style={{
            color: "#00838f",
            height: "100px",
          }}
        />
        <p>Prepaid Mobile Recharge</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faTv}
          size="2xl"
          style={{ color: "#00838f", height: "100px" }}
        />
        <p>DTH Recharge</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faIndianRupeeSign}
          size="2xl"
          style={{ color: "#00838f", height: "100px" }}
        />
        <p>Loans</p>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faBullhorn}
          size="2xl"
          style={{ color: "#00838f" }}
        />
        <p>Promotion</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faNewspaper}
          size="2xl"
          style={{ color: "#00838f" }}
        />
        <p>News</p>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faBlog}
          size="2xl"
          style={{ color: "#00838f" }}
        />
        <p>Blog</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faPeopleGroup}
          size="2xl"
          style={{ color: "#00838f" }}
        />
        <p>Jobs</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faMessage}
          size="2xl"
          style={{ color: "#00838f" }}
        />
        <p>Anonymous Feedback</p>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faLightbulb}
          size="2xl"
          style={{ color: "#00838f" }}
        />
        <p>Gas Booking</p>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faFire}
          size="2xl"
          style={{ color: "#00838f" }}
        />
        <p>Electricity Bill</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faDroplet}
          size="2xl"
          style={{ color: "#00838f" }}
        />
        <p>Water Bill</p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          size="2xl"
          style={{ color: "#00838f" }}
        />
        <p>See More</p>
      </div>
    </div>
  );
}

export default Services;
