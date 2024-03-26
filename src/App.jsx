import {Outlet} from "react-router-dom";
import "./App.css";
import NavIcon from "./components/nav-icon/nav-icon.jsx";


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        {/*NavIcon*/}
        <NavIcon route="home"/>
        <NavIcon route="settings"/>
      </div>
      <div className="widgets"></div>
      <Outlet/>{/* outlet will put a component in this place which matches the current route*/}
      
    </div>
  );
}

export default App;
