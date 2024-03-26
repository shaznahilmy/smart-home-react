import s from "./nav-icon.module.css";
import { HomeIcon } from "@heroicons/react/24/outline";
import {
  Cog6ToothIcon,
  ChartPieIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

function NavIcon() {
  return (
    <div className={`${s.container}`}>
      <HomeIcon width={30} height={30} />
    </div>
  );
}

export default NavIcon;
