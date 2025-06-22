import { initScene } from "./js/initScene.js";
import { createProduct } from "./js/createProduct.js";
import { addLighting } from "./js/addLighting.js";
import { setupInteraction } from "./js/interaction.js";
import { animateCamera } from "./js/cameraAnimation.js";

let sceneData = initScene();
createProduct(sceneData.scene);
addLighting(sceneData.scene);

setupInteraction(sceneData);
animateCamera(sceneData);
