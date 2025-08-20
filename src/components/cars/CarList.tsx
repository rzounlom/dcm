import "./CarList.css";

import type { Car } from "../../types";
import CarCard from "./CarCard";
import { type FC } from "react";

type CarListProps = {
  cars: Car[];
  deleteCar: (carId: string) => void;
  toggleFavorite: (carId: string) => void;
};

const CarList: FC<CarListProps> = ({ cars, deleteCar, toggleFavorite }) => {
  console.log({ cars });
  return (
    <div id="cars" className="car-list">
      {cars?.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          deleteCar={deleteCar}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default CarList;
