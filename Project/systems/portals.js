export class PortalSystem {
  constructor(world, app) {
    this.world = world;
    this.app = app;

    this.portalBox = new THREE.Box3().setFromCenterAndSize(
      new THREE.Vector3(0, 1, -5),  // Position in der Welt
      new THREE.Vector3(2, 2, 2)    // Größe
    );
  }

  update(delta) {
    const playerPos = this.world.controls.getObject().position;

    if (this.portalBox.containsPoint(playerPos)) {
      return "ENTER_APP";
    }

    return null;
  }
}
