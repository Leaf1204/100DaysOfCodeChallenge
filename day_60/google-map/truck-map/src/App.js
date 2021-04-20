import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { MDBIcon } from "mdbreact";

//import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 36.7783,
  lng: -119.4179,
}

// const options = {
//   styles: mapStyles,
// }

function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] =React.useState([]);

  if (loadError) return "error loading maps";
  if (!isLoaded) return "Loading Maps";
return (
  <div>
    <h1>TrackYourTruck {" "} <MDBIcon icon="truck-moving" /></h1>
    <GoogleMap mapContainerStyle={mapContainerStyle} 
    zoom={8} 
    center={center} 
    //options={options}
    onClick={ (event) => {
      setMarkers(current => [...current, {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date()

      } ])
    }}
    >
      {markers.map((marker) => (
        <Marker
        key={marker.time.toISOString()}
        position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))}

    </GoogleMap>

  </div>
);
};

export default App;