import "./App.css";

import CarList from "./components/cars/CarList";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { cars } from "./data/car";
import { useState } from "react";

function App() {
  const [carsState, setCarsState] = useState(cars);

  return (
    <div className="page-container">
      <Navbar />
      <Landing />
      <CarList cars={carsState} />
    </div>
  );
}

export default App;
