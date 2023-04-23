import React from "react";

export default function GoogleMapComponent() {
  const noneEncodedAddress = "Καραολή και Δημητρίου 80, Πειραιάς";
  const encodedAddress = encodeURIComponent(noneEncodedAddress.trim());
  const mapAddress = `https://maps.google.com/maps?q=${encodedAddress}k&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  return (
    <div className="gmap">
      <iframe
        title="google maps"
        style={{
          width: "99%",
          height: "500px",
        }}
        id="gmap_canvas"
        src={mapAddress}
      ></iframe>
    </div>
  );
}
