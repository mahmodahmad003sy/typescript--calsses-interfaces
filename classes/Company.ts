export class Company {
  name: String;
  responsible: string;
  location: {
    lat: Number;
    lon: Number;
  };
  constructor(name: String, lon: Number, lat: Number) {
    (this.name = name),
      (this.location = {
        lat,
        lon,
      });
  }

  log = () => {
    console.log(this.name);
  };
}
