import { Marketable } from "../interface/markabble";
import { User } from "./User";

export class custumMap {
  private map: google.maps.Map;

  addMarker(mappable: Marketable): void {
    new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
  constructor(divId) {
    this.map = new google.maps.Map(document.getElementById(divId)!, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 1,
    });
  }
}
