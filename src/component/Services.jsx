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
    <div
      className="container justify-items-center p-10  "
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gridGap: "10px",
      }}
    >
      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faMobileScreenButton}
          size="2xl"
          style={{
            color: "#00838f",
            height: "3rem",
          }}
        />
        <p className="text-center">Prepaid Mobile Recharge</p>
      </div>
      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faTv}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p className="text-center"> DTH Recharge</p>
      </div>
      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faIndianRupeeSign}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p className="text-center">Loans</p>
      </div>

      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faBullhorn}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p className="text-center">Promotion</p>
      </div>
      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faNewspaper}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p style={{ margin: "0 auto", textAlign: "center" }}>News</p>
      </div>

      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faBlog}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p style={{ margin: "0 auto", textAlign: "center" }}>Blog</p>
      </div>
      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faPeopleGroup}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p style={{ margin: "0 auto", textAlign: "center" }}>Jobs</p>
      </div>
      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faMessage}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p className="text-center">Anonymous Feedback</p>
      </div>

      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faLightbulb}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p className="text-center"> Gas Booking</p>
      </div>

      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faFire}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p className="text-center">Electricity Bill</p>
      </div>
      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faDroplet}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p className="text-center">Water Bill</p>
      </div>
      <div className="flex flex-col justify-center mt-4 cursor-pointer">
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          size="2xl"
          style={{ color: "#00838f", height: "3rem" }}
        />
        <p className="text-center">See More</p>
      </div>
    </div>
  );
}

export default Services;