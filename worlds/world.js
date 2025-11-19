export class World {
  constructor(renderer, camera) {
    this.renderer = renderer;
    this.camera = camera;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x88ccff);

    this.player = {
      velocity: new THREE.Vector3(),
      speed: 5
    };

    // Boden
    const groundGeo = new THREE.PlaneGeometry(200, 200);
    const groundMat = new THREE.MeshStandardMaterial({ color:0xdddddd });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    this.scene.add(ground);

    // Licht
    const light = new THREE
