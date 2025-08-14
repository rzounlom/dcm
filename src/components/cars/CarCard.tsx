import "./CarCard.css";

import type { Car } from "../../types";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";

interface CarCardProps {
  car: Car;
  deleteCar: (carId: string) => void;
}

const CarCard: React.FC<CarCardProps> = ({
  deleteCar,
  car: { id, year, make, model, description, imageUrl, favorite },
}) => {
  return (
    <div className="car-card">
      <div className="favorite-icon">
        <div className="favorite-icon">
          {favorite ? <TiHeartFullOutline /> : <IoMdHeartEmpty />}
        </div>
      </div>
      <div className="car-img">
        <img src={imageUrl} alt={`${year} ${make} ${model}`} />
      </div>

      <div className="car-details">
        <h3>
          {year} {make} {model}
        </h3>
        <p>
          {description?.slice(0, 500)}...
          <span className="view-more">View More</span>
        </p>
      </div>
      <div className="car-footer">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn" onClick={() => deleteCar(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CarCard;
