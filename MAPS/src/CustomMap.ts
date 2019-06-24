import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string, option: google.maps.MapOptions) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId),
      option
    );
  }

  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}
