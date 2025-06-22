export function animateCamera({ scene, camera, renderer, controls }) {
  let angle = 0;
  let autoRotate = true;

  const animate = (time) => {
    requestAnimationFrame(animate);
    if (autoRotate) {
      angle += 0.002;
      const radius = 10;
      camera.position.x = radius * Math.sin(angle);
      camera.position.z = radius * Math.cos(angle);
      camera.lookAt(0, 0.5, 0);
    }
    controls.update();
    renderer.render(scene, camera);
  };

  renderer.domElement.addEventListener("mousedown", () => (autoRotate = false));
  renderer.domElement.addEventListener("mouseup", () =>
    setTimeout(() => (autoRotate = true), 3000)
  );

  animate();
}
