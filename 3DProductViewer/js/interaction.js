import * as THREE from "three";

export function setupInteraction({ scene, camera, renderer }) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const infoPanel = document.getElementById("infoPanel");

  renderer.domElement.addEventListener("pointermove", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children[0].children);
    if (intersects.length > 0) {
      const object = intersects[0].object;
      object.scale.set(1.1, 1.1, 1.1);
      infoPanel.style.display = "block";
      infoPanel.innerText = object.name;
    } else {
      scene.children[0].children.forEach((obj) => obj.scale.set(1, 1, 1));
      infoPanel.style.display = "none";
    }
  });

  renderer.domElement.addEventListener("click", () => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children[0].children);
    if (intersects.length > 0) {
      const obj = intersects[0].object;
      const originalColor = obj.material.color.getHex();
      obj.material.color.set(0xff0000);
      setTimeout(() => obj.material.color.setHex(originalColor), 300);
    }
  });
}
