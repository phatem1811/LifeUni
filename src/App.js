import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mantine/core";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Card from "./components/card/Card";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Card />
    </div>
  );
}

export default App;
