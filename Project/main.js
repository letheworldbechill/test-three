import { World } from "./worlds/world.js";
import { AppArea } from "./app/app.js";
import { PortalSystem } from "./systems/portals.js";

export function main() {

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias:true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Globale Kamera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 500);

  // Szenen
  const world = new World(renderer, camera);
  const app = new AppArea(renderer, camera);
  const portals = new PortalSystem(world, app);

  let mode = "WORLD"; // WORLD | APP

  function loop(t) {
    const delta = t * 0.001;

    if (mode === "WORLD") {
      world.update(delta);
      const portalEvent = portals.update(delta);

      if (portalEvent === "ENTER_APP") {
        mode = "APP";
        app.load();
      }
    }

    else if (mode === "APP") {
      app.update(delta);
      const back = app.checkExit();
      if (back === "RETURN_WORLD") {
        mode = "WORLD";
        world.resume();
      }
    }

    renderer.render(
      mode === "WORLD" ? world.scene : app.scene,
      camera
    );

    requestAnimationFrame(loop);
  }

  loop(0);
}
