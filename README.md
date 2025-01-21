# babylon_library_tree_shaking

A repo to help dedug the issue of treeshaking vs core imports discussed here: https://forum.babylonjs.com/t/engine-lastcreatedscene-returns-null-when-using-tree-shaking-imports/55300/10

# What is it

- test_library: contains a sample npm library under the src folder with two functions that get the last scene created from Eninge, log it, and make a box. getSceneFromEngineCore() uses core import getSceneFromEngineTreeShaking() uses tree shaking imports. 

- test_app: contains a sample application that consumes test_library and executes the two functions in main.js which contains a simple babylon application

# How to use

I recommend using github code spaces to replicate the exact env. It can be started by click the green 'code' button at the top and switching to the codespaces tab.

- cd into test_library in the console and run 'npm run build' to compile the library

- cd into test_app in the console and run 'npm run dev' to start the dev server to view the application. open the dev console to see the logs. the page will not compile as getSceneFromEngineTreeShaking() will break when it tries to make a box because scene is null. But getSceneFromEngineCore() will not fail. 

- making changes to test_library will hot reload test_app after npm run build
