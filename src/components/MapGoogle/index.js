import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const  MapGoogle = (props)=> {
    const containerStyle = {
      
        width: '100%',
        height: '50%',
     
      }
  return (
    <>
    <Map      containerStyle={containerStyle}
    google={props.google} zoom={14}>
 
 <Marker onClick={props.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={props.onInfoWindowClose}>
   
 </InfoWindow>
</Map>
    </>
  );
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyDcHA2QmxKw81KV-mMAxaHQoWYTOGyR9LA")
  })(MapGoogle)