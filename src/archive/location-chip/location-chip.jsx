import s from "./location-chip.module.css"

function LocationChip() {
  const handleClick = () => {
  
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={s.button}
    >
      {"All"}
    </button>
  );
}

export default LocationChip;
