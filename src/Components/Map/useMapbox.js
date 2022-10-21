import { useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { places } from "./places";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmxhbWUxODAwIiwiYSI6ImNsOWd5dHZlbTAxNXIzdW9nc20ybDh5OWUifQ.0RppLobjqyCH_GqZnQ3iaQ";

export default function useMapbox(
  container = "map",
  center = [69.018911, 61.003184],
  zoom = "5"
) {
  const [lng, lat] = center;

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom,
    });

    places.forEach((place) => {
      const { title, address, coords, date, type } = place;

      const elMarker = document.createElement("div");
      elMarker.innerHTML = `<div class="marker"><div class='marker-name'>${title}</div></div>`;

      const card = `
        <img src="/img/model.png" alt="Модель места" />
        <h3 class="title">${title}</h3>
        <span class="date">${date}</span>
        <span class="type">${type}</span>
        <p class="address">${address}</p>
      `;

      const marker = new mapboxgl.Marker(elMarker)
        .setLngLat([coords[1], coords[0]])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(card)
        )
        .addTo(map);
    });
  }, [container, zoom, lng, lat]);
}
