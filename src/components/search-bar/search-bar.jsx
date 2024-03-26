import s from "./search-bar.module.css"; //to import the stylesheet

function SearchBar(props) {
  const handleChange = (e) => {
    props.handleSearchTyping(e.target.value);
  };

  return (
    <form className={s.form}> {/*name of the class in the css file */}
      <div className={s.searchbar_container}>
        <input
          type="search"
          className={s.searchbar_input}
          name="device"
          onChange={handleChange}
          value={props.searchValue}
          placeholder="Search..."  
          id="device-search"
        />
      </div>
    </form>
  );
}

export default SearchBar;
