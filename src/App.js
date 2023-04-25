import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <Footer/>
    </div>
  );
}

export default App;
