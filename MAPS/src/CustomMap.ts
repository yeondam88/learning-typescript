export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string, option: Object) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId),
      option
    );
  }

  addMarker(): void {}
}
