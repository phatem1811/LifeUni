import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mantine/core";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Review from "./components/review/Review";
import Expert from "./components/expert/Expert";
import Suggest from "./components/suggest/Suggest";
import Advertise from "./components/advertise/Advertise";
import Experter from "./components/experter/Experter";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Card />
      <Review />
      <Advertise />
      <Expert />
      <Experter />
      <Suggest />
      <Footer />
    </div>
  );
}

export default App;
