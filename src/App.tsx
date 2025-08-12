import "./App.css";

import CarList from "./components/cars/CarList";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { cars } from "./data/car";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Landing />
      <CarList cars={cars} />
    </div>
  );
}

export default App;
