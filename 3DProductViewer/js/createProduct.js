import * as THREE from "three";

export function createProduct(scene) {
  const material = new THREE.MeshStandardMaterial({ color: 0x8fbc8f });
  const group = new THREE.Group();

  // Seat
  const seat = new THREE.Mesh(new THREE.BoxGeometry(2, 0.2, 2), material);
  seat.name = "Seat";
  group.add(seat);

  // Legs
  const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 16);
  const positions = [
    [-0.9, -0.6, -0.9],
    [0.9, -0.6, -0.9],
    [-0.9, -0.6, 0.9],
    [0.9, -0.6, 0.9],
  ];
  positions.forEach((pos, i) => {
    const leg = new THREE.Mesh(legGeometry, material);
    leg.position.set(...pos);
    leg.name = `Leg ${i + 1}`;
    group.add(leg);
  });

  group.position.y = 0.5;
  scene.add(group);
}
