import { Rating, Typography } from "@mui/material";
import "../../App.css";
const FilterRating = ({ setRate, rate }) => {
  return (
    <div className="ratingg">
      <h3>Filter Movies By Rating</h3>
      <Rating
        name="simple-controlled"
        value={rate}
        onChange={(event, newValue) => {
          setRate(newValue);
        }}
      />
    </div>
  );
};

export default FilterRating;
