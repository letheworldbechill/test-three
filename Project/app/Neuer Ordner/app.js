export class AppArea {
  constructor(renderer, camera) {
    this.renderer = renderer;
    this.camera = camera;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x111111);

    const box = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshStandardMaterial({ color:0xffaa00 })
    );
    box.position.y = 1;
    this.scene.add(box);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5,5,5);
    this.scene.add(light);
  }

  load() {
    console.log("App gestartet");
  }

  update(delta) {}

  checkExit() {
    // hier später Zone oder Knopf:
    return "RETURN_WORLD";
    return null;
  }
}
