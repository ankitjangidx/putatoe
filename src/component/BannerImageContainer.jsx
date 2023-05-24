import banner from "../assets/banner.png"
function BannerImageContainer() {
  return (
    <div className="flex justify-center p-4 bg-slate-100">
      <img src={banner} alt="banner" className="w-4/5" />
    </div>
  );
}

export default BannerImageContainer