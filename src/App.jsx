import Services from "./component/Services";
import BannerImageContainer from "./component/BannerImageContainer"
import Construction from "./component/Construction";
import FooterContainer from "./component/FooterContainer";
import Navbar from "./component/Navbar"


function App() {

  return (
    <>
      <Navbar />
      <BannerImageContainer />
      <Services />
      <Construction />
      <FooterContainer />
    </>
  );
}

export default App
