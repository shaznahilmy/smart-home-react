import s from "./location-chip.module.css";

function LocationChip(props) {
  const isSelected = props.location === props.selectedLocation ? true : false;

  const handleClick = () => {
    props.handleLocationSelect(props.location)
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={isSelected ? s.button_selected : s.button_not_selected}
    >
      {props.location}
    </button>
  );
}

export default LocationChip;

/*
import s from "./location-chip.module.css";

function LocationChip() {
  //const isSelected = props.location === props.selectedLocation ? true : false;

  const handleClick = () => {
   
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={s.button}
    >
      {" All"}
    </button>
  );
}

export default LocationChip;*/