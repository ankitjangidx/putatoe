import banner from "../assets/banner.png";

function FooterContainer() {
  return (
    <div className="p-4 bg-slate-100">
      <h3 className="text-[#007092] text-4xl font-medium text-center bg-[#00709236] p-2">
        Services We Provide
      </h3>
      <div className="flex  flex-wrap p-5 ">
        <div className="w-1/2 relative cursor-pointer">
          {/* <h1 className="text-2xl absolute bottom-5 left-1/2 right-1/2">Construction</h1> */}
          <img src={banner} alt="" className="p-2" />
        </div>
        <div className="w-1/2 relative cursor-pointer">
          <img src={banner} alt="" className="p-2" />
          {/* <h1>Consultancy</h1> */}
        </div>
        <div className="w-1/2 relative cursor-pointer">
          <img src={banner} alt="" className="p-2" />
          {/* <h1>Daily Needs</h1> */}
        </div>
      </div>
    </div>
  );
}

export default FooterContainer;
