import { User } from "./classes/User";
import { custumMap } from "./classes/CustomMap";
import faker from "faker";
console.log("hello");

window.onload = function () {
  const user = new User(
    faker.name.firstName() + " " + faker.name.lastName(),
    parseInt(faker.address.latitude()),
    parseInt(faker.address.longitude())
  );
  const user2 = new User(
    faker.name.firstName() + " " + faker.name.lastName(),
    parseInt(faker.address.latitude()),
    parseInt(faker.address.longitude())
  );
  const map = new custumMap("map");
  map.addMarker(user);
  map.addMarker(user2);
};
