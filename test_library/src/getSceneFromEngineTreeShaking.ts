import { Engine } from "@babylonjs/core/Engines/engine";
import { CreateBox } from "@babylonjs/core/Meshes/Builders/boxBuilder";


export function getSceneFromEngineTreeShaking(){
    let scene = Engine.LastCreatedScene;
    console.log('last created scene: ', scene)
    CreateBox('box', {}, scene);

    return scene;
}