import { Engine, CreateBox} from "@babylonjs/core";


export function getSceneFromEngineCore(){
    let scene = Engine.LastCreatedScene;
    console.log('last created scene: ', scene)
    CreateBox('box', {}, scene);

    return scene;
}