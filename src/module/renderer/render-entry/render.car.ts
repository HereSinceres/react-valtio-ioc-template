import bezier from 'adaptive-bezier-curve';
import curve from 'adaptive-bezier-curve';
import normalize from 'normalize-path-scale';
import * as THREE from 'three';
import BasicShaderFun from 'three-line-2d/shaders/basic';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import carMaterial from '../../../assets/models/car.mtl?url';
import carObject from '../../../assets/models/car.obj?url';
import { ThreeLine2d } from '../lib/three-line-2d';
import { loadObject } from '../util/models';
import { RenderEntry } from './render-entry';

var BasicShader = BasicShaderFun(THREE);

export class RenderCar extends RenderEntry {
    mat = new THREE.ShaderMaterial(
        BasicShader({
            side: THREE.DoubleSide,
            diffuse: 0x5cd7ff,
            thickness: 0.2,
        })
    );
    constructor() {
        super();
        loadObject(
            carMaterial,
            carObject,
            {
                x: 1,
                y: 1,
                z: 1,
            },
            (object) => {
                const mesh = object;
                mesh.rotation.x = Math.PI / 2;
                // this.mesh.visible = STORE.options[properties.menuOptionName];

                this.scene.add(mesh);
            }
        );
        this.testUpdate();
    }
    testUpdate() {
        this.update();
        requestAnimationFrame(this.testUpdate.bind(this));
    }
    update() {
        // this.mat.uniforms.thickness.value = Math.sin(time * 0.5) * 0.2;
    }
}
