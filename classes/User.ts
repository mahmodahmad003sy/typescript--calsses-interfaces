export class User {
  name: String;
  location: {
    lat: number;
    lng: number;
  };
  constructor(name: String, lat: number, lng: number) {
    this.name = name;
    this.location = {
      lat,
      lng,
    };
  }

  log = () => {
    console.log(this.name);
  };
}
