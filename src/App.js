import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import FAQ from "./Components/FAQ";
import MidSection from "./Components/MidSection";
import StickyFooter from "./Components/StickyFooter";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 navbar-bg">
          <Navbar />
        </div>
        <div className="col-md-12 gradient_background">
          <Banner />
        </div>
        <div className="col-md-12 bg-gray">
          <MidSection />
        </div>
        <div className="col-md-12 bg-black">
          <FAQ />
        </div>
        <div className="col-md-12 bg-black" id="showFooter">
          <StickyFooter/>
        </div>
      </div>
    </div>
  );
}

export default App;
