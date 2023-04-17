import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// require("three/examples/js/loaders/OBJLoader.js");
// require("three/examples/js/loaders/MTLLoader.js");

// The two loaders for material and object files, respectively.
const mtlLoader = new MTLLoader();
const textureLoader = new THREE.TextureLoader();

THREE.TextureLoader.prototype.crossOrigin = '';

const loadedMaterialAndObject: Record<string, THREE.Group> = {};

export function loadObject(
    materialFile: string,
    objectFile: string,
    scale: { x: number; y: number; z: number },
    callback: (object: any) => void
) {
    function placeMtlAndObj(loaded: THREE.Group) {
        if (callback) {
            const object = loaded.clone();
            callback(object);
        }
    }

    if (loadedMaterialAndObject[objectFile]) {
        placeMtlAndObj(loadedMaterialAndObject[objectFile]);
    } else {
        new Promise((resolve, reject) => {
            if (materialFile) {
                mtlLoader.load(materialFile, (materials) => {
                    materials.preload();
                    resolve(materials);
                });
            } else {
                resolve(null);
            }
        })
            .then((materials) => {
                const objLoader = new OBJLoader();
                if (materials) {
                    objLoader.setMaterials(
                        materials as MTLLoader.MaterialCreator
                    );
                }

                objLoader.load(objectFile, (loaded) => {
                    loaded.name = objectFile;
                    loaded.scale.set(scale.x, scale.y, scale.z);
                    loadedMaterialAndObject[objectFile] = loaded;
                    placeMtlAndObj(loaded);
                });
            })
            .catch(() => {
                console.error('Failed to load object.');
            });
    }
}

// export function loadTexture(textureFile, onLoadCallback, onErrorCallback) {
//     textureLoader.load(textureFile, onLoadCallback, undefined, onErrorCallback);
// }

// export function loadMaterial(materialFile, onLoadCallback) {
//     mtlLoader.load(materialFile, onLoadCallback);
// }
