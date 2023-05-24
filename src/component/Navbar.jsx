import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <div className="bg-[#00838f] text-lg flex justify-center items-center ">
      <span className="flex min-w-[60vw] items-center justify-center relative  ">
        <div className="absolute left-8">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#00838f" }}
          />
        </div>

        <input
          type="text"
          name=""
          id=""
          className="m-2 py-2 px-16  rounded-md w-full focus:outline-none"
          placeholder="Search for products.."
        />
        <FontAwesomeIcon
          icon={faMicrophone}
          size="lg"
          style={{ color: "#f5f5f5" }}
        />
      </span>
    </div>
  );
}

export default Navbar;
