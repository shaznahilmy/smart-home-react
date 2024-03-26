//the div home code was initially in app.jsx after div widjets and below function App
import Header from "../components/header/header";
import LocationChip from "../components/location-chip/location-chip";
import SearchBar from "../components/search-bar/search-bar";
import DeviceCard from "../components/device-card/device-card";
// imports are the ones in green

import { useEffect, useState } from "react";

function Home() {
  
  // the devices array
  //NOT NEEDED NOW BECAUSE WE'RE USING THE DATA FROM THE SERVER
  const devices = [
    {
      id:1,
      image: "https://source.unsplash.com/KP7p0-DRGbg",
      location: "Living Room", //to display the location
      name: "Main Light",
      state:false,
    },
    {
      id:2,
      image: "https://source.unsplash.com/sO5LtzSHpDQ",
      location: "Living Room",  //to display the location
      name: "Ceiling Fan",
      state:false,
    },
    {
      id:3,
      image: "https://source.unsplash.com/toX2sYnycCw",
      location: "Bed Room",  //to display the location
      name: "Night Light",
      state:false,
    },
    {
      id:4,
      image: "https://source.unsplash.com/ujSsIk5iZmA",
      location: "Living Room",  //to display the location
      name: "CCTV",
      state:false,
    },
  ]; 
  
  //state setter where the fetched data will be put into
  //COMMENTED BC THE SERVER ISNT WORKING const [devices, setDevices] = useState([]); // this is a state called devices with initial data being an empty array
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(""); //to implement the search function
  
  //funtion to setSearchValue to the value entered 
  const handleSearchTyping = (value) => {
    setSearchValue(value);
    console.log(value);
  };

  /*
  <React.StrictMode> in main.jsx
  this is there to make sure that the application doesnt break when useEffect is run more than once
  */ 
 
  /*
  useEffect is also a way to syncronise our local application state with the server
  useEffect may run multiple times depending on how many times the component it is in is being called.
  useEffect running multiple times also depends on the dependancy array at the end of the function.
  eg: if we have [selectedLocation], useEffect will run each time the location changes
  */

  useEffect(() => { // useEffect is a function that will run each time the application is loaded at the start
    //COMMENTED BC THE SERVER ISNT WORKING const getDevices = async () => { // when you mark a function as async, it means ithere are things in the function that'll run in the background
       // responses is going to hold the responses from the server
      //COMMENTED BC THE SERVER ISNT WORKING const response = await fetch(
      //COMMENTED BC THE SERVER ISNT WORKING   "https://smart-home-ui-api-production.up.railway.app/api/devices",
      //COMMENTED BC THE SERVER ISNT WORKING   {
      //COMMENTED BC THE SERVER ISNT WORKING     method: "GET",  // asking things from a server
          // headers mention the kind of data we're expecting
          //in this case, we're expecting data in the js format like in the array format above
      //COMMENTED BC THE SERVER ISNT WORKING     headers: { "Content-Type": "application/json" }, //
      //COMMENTED BC THE SERVER ISNT WORKING   }
      //COMMENTED BC THE SERVER ISNT WORKING );
      //COMMENTED BC THE SERVER ISNT WORKING const data = await response.json();
      //COMMENTED BC THE SERVER ISNT WORKING console.log(data.data);
     
      // the server return an object with the status and the array
      //in this case, the array is named data and we call data.data to access the array contents
      //COMMENTED BC THE SERVER ISNT WORKINGsetDevices(data.data); // so the data can be displayed in the ui
    //COMMENTED BC THE SERVER ISNT WORKING };
    //COMMENTED BC THE SERVER ISNT WORKING getDevices(); // calling the getDevice function
    setLoading(false); 

    
  }, []); // The second argument [] indicates that the useEffect will run only once

  const locations = ["All", "Living Room", "Bed Room"];  // Array for the locations
  //line 33 to 37 seems like it should be locationchip, but we're passing it as props to the locationchip.jsx because filteredDevice needs it
  const [selectedLocation, setSelectedLocation] = useState("All"); //useState is the initial state

  const handleLocationSelect = (location) => { // whenever this handler function is called with location parameter, its going to setSelectedLocation to the location
    setSelectedLocation(location); // this is a setter
  };

  // function to change the state of the devices (on or off)
  // CALLING A STATE SETTER WILL TRIGGER A RE RENDER
  //NOW THE STATE LIVES IN THE ARRAY AND NOT THE COMPONENT BECAUSE OF THE
  const handleDeviceUpdate = (_id) =>{
    setDevices((currentDevices) =>{
      //creating an array called updatedDevices where for each device object we put in, we create them freshly
      const updatedDevices = currentDevices.map((currentDevice) =>{
        if (currentDevice._id === _id){
          return {
            _id: currentDevice._id, 
            name: currentDevice.name, 
            image: currentDevice.image, 
            location: currentDevice.location,
            state:!currentDevice.state
          };
        }
        return currentDevice;
      });
      return updatedDevices;

 });
};

  const filteredDevices =  // this is an array
    selectedLocation === "All"  // code to disply all products
      ? devices.filter((device) => {   // the things in purple bracket is a function which is to be applied on each device
        return device.name
        .replace(" ", "") // to facilitate main light => mainlight
        .toLowerCase()    // this is javascript
        .includes(searchValue);
    })
    : devices.filter((device) => {
      return (
        device.location === selectedLocation &&
        device.name.replace(" ", "").toLowerCase().includes(searchValue)
      );
    });
        // when the function returns true, those values will be put into filteredDevices
        // it check is the Main light location is selectedLocation, if true, it will be put into the filteredDevices array


    return (
    <div className="home">
    <Header />
    <div className="devices_section">
      <h1 className="devices_section_heading">Devices</h1>

      {/* Menu Bar that allows to select house locations*/}
      <div className="menu-bar">
        <div className="menubar_item_container">
        {locations.map((location, i) => { // this will return an array of react objects shown in the ui
          return (
            <LocationChip // the actual click is happening insdie the location chip.jsx
              key={i} // key is not a js concept, its a react object to identify which component is which
              location={location} // to display all the location names in the button
              selectedLocation={selectedLocation} // to colour the button black of the selected location
              handleLocationSelect={handleLocationSelect} // on click, the devices based on locations would change
            />
          );
        })}
        </div>
        <SearchBar handleSearchTyping={handleSearchTyping} searchValue={searchValue}/>
      </div>
      <div className="device_container">
        {!loading ? (  //if loading is false, the devices are displayed
          filteredDevices.map((device) => {
            return (  // we are giving each device the id assigned by the database
            //<DeviceCard key={device._id} device={device,.name} device=device.location  /> 
              <DeviceCard key={device._id} device={device}  handleDeviceUpdate={handleDeviceUpdate}  /> 
            );   // an alternative is to generate randowm numbers and assign it as key
          })
        ) : (
          <h1>Loading...</h1>  // else, this is displayed
        )}
      </div>
    </div>
  </div>);
};

export default Home;