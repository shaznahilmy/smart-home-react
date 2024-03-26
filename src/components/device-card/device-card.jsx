import s from "./device-card.module.css";
import PropTypes from "prop-types";
import { PowerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function DeviceCard(props) {
  // DUE TO IMPLEMENTING STATE const [isOn, setIsOn] = useState(false);   // a state variable
  // const state = isOn ? "ON" : "OFF";   // a ternary expression if isOn is true, state is set to ON, otherwise state is set to OFF
  //const [count, setCount] = useState(0); //for the fist time the setCount is set to be 0, which is the initail renderer

  const handleClick = () => {
    props.handleDeviceUpdate(props.device._id);
  // DUE TO IMPLEMENTING STATE   setIsOn(!isOn);  // setting isOn to true
    // setCount(count + 1);   code to increase the count each time clickMe is clicked (current version add 1: this is how it works)

    // Another way of doing it which is called updating state by deriving using a call back function
    //N is the current state and its going to hold whatever the value count has

  //    {/*setCount((n) => {   //setCount function that has 1 parameter which is n. 
      
  //      return n + 1;      //updating the state by adding 1
  //    });*/}
 };

  return (
    <div className={s.device_card}>
      <img className={s.device_card_img} src={props.device.image} alt="" />
      <div className={s.device_card_info}>
        <div className={s.device_card_info_container}>
          <h3 className={s.device_card_text}>{props.device.name}</h3>
         {/* <h3 className={s.device_card_text}>{count}</h3> */}     {/*The value in count will be displayed by this code*/}
        
        <button
            type="button"
            onClick={handleClick}
            //className={isOn ? s.device_card_icon_on : s.device_card_icon_off}
            className={props.device.state ? s.device_card_icon_on : s.device_card_icon_off}
          >
            <PowerIcon width={36} height={36} />
  </button>
          {/*<button type="button" onClick={handleClick}>
            Click Me   a button that says clickMe will appear
          </button> */}
        </div>
      </div>
    </div>
  );
}

DeviceCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default DeviceCard;
