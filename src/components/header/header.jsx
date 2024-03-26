import ProfileImg from "./../../assets/profile.jpg";
import s from "./header.module.css";

function Header() {
  const name = "Shazna";

  return (
    <div className={s.header}>
      <div>
        <h1 className={s.header_heading}>Hello, {name}!</h1>
        <p className={s.header_tagline}>Your devices are under your control.</p>
      </div>
      <div>
        <img src={ProfileImg} alt="" className={s.profile_img} />
      </div>
    </div>
  );
}

export default Header;
