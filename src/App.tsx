import "./App.css";

import type { Car } from "./types";
import CarList from "./components/cars/CarList";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { cars } from "./data/car";
import { useState } from "react";

function App() {
  const [carsState, setCarsState] = useState(cars);

  // Handler function to add a new car to the cars state
  // This function will be passed down to child components that need to add cars
  const addCar = () => {
    // Create a new car object based on the first car in the cars array
    // This will be used as a template when adding new cars
    // We spread the first car's properties and generate a new unique ID
    const newCar: Car = {
      id: `${Date.now()}`, // Unique identifier for this car (string format) Current timestamp
      year: "2024", // Manufacturing year as a string
      make: "Ferrari", // Car manufacturer/brand
      model: "812GTS", // Specific model name
      description:
        "The Ferrari 812GTS is everything a Ferrari should be. It’s painfully gorgeous and upholstered with the finest Italian leather, but those details are just a warmup for the naturally aspirated, 789-hp V-12 engine. Comically fast, the front-mounted V-12 sings the maker’s siren song as conducted by the driver’s right foot whenever the mood strikes. If that sounds a bit dramatic, it is, but the 812’s purity of purpose and design are that inspiring. Part of that charm is how civil it can be for nights on the town even as neck-straining acceleration remains just an accelerator stab away. While Ferrari isn’t fond of us strapping our test gear to its products, we were able to clock a 2.7-second 60-mph run back in 2018 in the GTS’s coupe version, then called the Superfast. It hit 100 mph in 5.7 seconds and destroyed the quarter-mile in 10.4 seconds at 138 mph. Superfast indeed. That same 6.5-liter V-12 is found under the hood of the 2024 812GTS convertible—the only body style available for this model year. Any doubts regarding the 812’s supercar bandwidth were quelled with our drive of the 2021 Ferrari 812 GTS, where we came away deeming it “two cars in one.” Buyers fortunate enough to land a 2024 812GTS are also joining an elite club, as the 812 will very likely be the last naturally aspirated V-12 Ferrari sports car without hybrid assist. As if the 812 needed anything more to make it special.",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/2024-ferrari-812-gts-101-64caae4038b21.jpeg?crop=0.547xw:0.548xh;0.127xw,0.342xh&resize=2048:*", // URL to car image
      favorite: false, // Boolean indicating if this car is marked as favorite
      createdAt: "2025-01-01T00:00:00.000Z", // ISO 8601 timestamp for when record was created
      updatedAt: "2025-01-01T00:00:00.000Z", // ISO 8601 timestamp for when record was last updated
    };

    // Use setCarsState to update the cars array
    // We use the functional update pattern to ensure we're working with the latest state
    // setCarsState((prevCars) => [newCar, ...prevCars]);
    setCarsState([newCar, ...carsState]);
  };

  const deleteCar = (carId: string) => {
    const updatedCars = carsState.filter((car) => car.id !== carId);
    setCarsState(updatedCars);
  };

  return (
    <div className="page-container">
      <Navbar addCar={addCar} />
      <Landing />
      <CarList cars={carsState} deleteCar={deleteCar} />
    </div>
  );
}

export default App;
