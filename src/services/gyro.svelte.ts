import { browser } from "$app/environment";
import { Euler, Quaternion } from "three";

class Gyro {
  rotation = $state.raw<Quaternion>();
  orientation = $state.raw<OrientationType>("portrait-primary");
}
const gyro = new Gyro();
export default gyro;

if (browser) {
  gyro.orientation = screen.orientation.type;
  window.addEventListener("orientationchange", () => {
    gyro.orientation = screen.orientation.type;
  });

  window.addEventListener("deviceorientation", (e) => {
    if (e.alpha === null || e.beta === null || e.gamma === null) {
      return;
    }
    gyro.rotation = new Quaternion().setFromEuler(
      new Euler(
        (e.beta * Math.PI) / 180,
        (e.gamma * Math.PI) / 180,
        (e.alpha * Math.PI) / 180,
        "XYZ",
      ),
    );
  });
}
