
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { HemisphericLight, ArcRotateCamera, Vector3, Scene, Engine} from '@babylonjs/core';
import * as testLib from "test_library";

//Grab DOM element where we will attach our canvas. #app is the id assigned to an empty <div> in our index.html 
const app = document.querySelector('#app');
//Create a canvas element and append it to #app div
const canvas = document.createElement('canvas');
app.appendChild(canvas);

//initialize babylon engine, passing in our target canvas element, and create a new scene
const babylonEngine = new Engine(canvas, true)

//create a scene object using our engine
const scene = new Scene(babylonEngine)

//Add lights and a camera
new HemisphericLight('light1', new Vector3(0, 10, 0), scene)
const camera = new ArcRotateCamera("Camera", -(Math.PI / 4) * 3, Math.PI / 4, 10, new Vector3(0, 0, 0), scene);
camera.position = new Vector3(-10, 10, -20)
camera.attachControl(true)


/**
 * 
 * Start Of Test Code
 * 
 */

// A function defined with imports from "@babylonjs/core" 
// test_library/src/getSceneFromEngineCore.ts

testLib.getSceneFromEngineCore();

// A function defined with imports directly from their respective files
// test_library/src/getSceneFromEngineTreeShaking.ts

testLib.getSceneFromEngineTreeShaking();


/**
 * 
 * End Of Test Code
 * 
 */

//Render the scene we created
babylonEngine.runRenderLoop(() => {
  scene.render()
})

//Listen for window size changes and resize the scene accordingly 
window.addEventListener("resize", function () {
  babylonEngine.resize();
});


// hide/show the Inspector
window.addEventListener("keydown", (ev) => {
    // Shift+Ctrl+Alt+I
    if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
        if (scene.debugLayer.isVisible()) {
            scene.debugLayer.hide();
        } else {
            scene.debugLayer.show();
        }
    }
});
