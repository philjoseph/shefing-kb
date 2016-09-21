import React from 'react';
import {GoogleMapLoader,GoogleMap} from 'react-google-maps';

export default props=>{
	return(
		<GoogleMapLoader
        containerElement={
          <div style={{height:150, width:200}}/>
        }
        googleMapElement={
          <GoogleMap defaultZoom={12}
            defaultCenter={{ lat: props.lat, lng: props.lon }}/>
        }
      />
		);
}